// import GoogleMap from '../../components/google-map/google-map';
import type { IEquatable } from '@websolute/core';
import { Filter, filtersToParams, useDebounceCallback, useFilters, useInfiniteLoader, useSearchParams } from '@websolute/hooks';
import { MapPin } from '@websolute/icons';
import type { IFeatureType } from '@websolute/models';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Container, Flex, Grid, InfiniteLoader, Section, Text } from '../../components';
import GoogleMap from '../../components/google-map/google-map';
import GoogleMapInfoWindow, { InfoWindow } from '../../components/google-map/google-map-info-window';
import GoogleMapLoader, { GoogleMapLoaderStatus } from '../../components/google-map/google-map-loader';
import GoogleMapMarker from '../../components/google-map/google-map-marker';
import GoogleMapMarkerClusterer from '../../components/google-map/google-map-marker-clusterer';
import GoogleMapMarkerClustererPlus from '../../components/google-map/google-map-marker-clusterer-plus';
import GoogleMapSkeleton from '../../components/google-map/google-map-skeleton';
import { autocompleteSource, calculateDistances, findMe, geocode, getBounds, IAutocompleteResult, IAutocompleteResultDetail, IGeoLocalized } from '../../components/google-map/google-map.service';
import type { UIComponentProps } from '../../components/types';
import { RadioOption } from '../../forms';
import Autocomplete from '../../forms/autocomplete/autocomplete';
import { IAutocompleteItem } from '../../forms/autocomplete/autocomplete-context';
import ContactCard from '../../sections/contact-card/contact-card';
// import Dots from './store-locator-dots';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '';
const USE_CLUSTERER = false;
const USE_CLUSTERER_PLUS = true;

// this function filters the store locator items by bounds or category
export function filterStoreLocatorItem(key: string, item: StoreLocatorItem, value: IEquatable): boolean {
  switch (key) {
    case 'category':
      return item.category && item.category.id === value;
    default:
      return false;
  }
}

type Props = {
  locale: string;
  country: { id: string, name: string },
  item: StoreLocatorHeadItem;
  items: StoreLocatorItem[];
  featureTypes: IFeatureType[];
}

export type StoreLocatorHeadItem = {
  category: string;
  title: string;
  abstract: string;
}

export type StoreLocatorHeadProps = UIComponentProps<Props>;

const StoreLocatorSearch: React.FC<StoreLocatorHeadProps> = ({
  locale,
  country,
  item,
  items,
  featureTypes
}: StoreLocatorHeadProps) => {

  // useDebugChangedProps({ locale, country, item, items, featureTypes });

  // deserialize queryString encoded params
  const { params, replaceParamsSilently } = useSearchParams();

  // using item filter callback from service
  const filterItem = filterStoreLocatorItem;

  // initialize filters with items, featureTypes and queryString params
  const { filteredItems, filters, setFilter } = useFilters<StoreLocatorItem>(items, featureTypes, filterItem, params?.filter);

  // bounds filtered items
  const [boundsItems, setBoundsItems] = useState<StoreLocatorItem[]>(filteredItems);

  // visible results paged by the infinite scroll loader
  const [visibleItems, onMore, hasMore] = useInfiniteLoader(boundsItems);

  // google map info window current data
  const [infoWindow, setInfoWindow] = useState<InfoWindow>();

  // zoom defaults to world level
  const [zoom, setZoom] = useState(3);

  // center defaults to italy
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 41.87194,
    lng: 12.56738,
  });

  // current map bounds
  const [bounds, setBounds] = useState<google.maps.LatLngBounds>();

  // reference of the map instance meh
  const [map, setMap] = useState<google.maps.Map>();

  // reference to the map instance
  const mapRef = useRef<google.maps.Map>(null);

  // reference of the autocomplete input element
  const autocompleteRef = useRef<HTMLInputElement>(null);

  // options of the google map
  const googleMapOptions = useMemo(() => ({
    zoom,
    center,
    gestureHandling: 'cooperative',
    // scrollwheel: false,
    // overviewMapControl: true,
    // scaleControl: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: true,
  }), [center, zoom]);

  // centering on the current country or the url bounds parameters
  useEffect(() => {
    if (map) {
      if (params?.bounds && mapRef.current) {
        mapRef.current.fitBounds(params.bounds, 0);
        // setBounds(params.bounds);
        return;
      }
      const fetchResults = async () => {
        const results = await geocode({ 'address': country.name });
        const place = results?.find(x => x.types.includes('country'));
        if (place) {
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport, 0);
            // console.log('fitBounds', place);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(6);
            // console.log('setCenter', place);
          }
        }
      }
      fetchResults().catch(error => {
        console.log('StoreLocatorSearch.onFindMe.error', error)
      });
    }
  }, [country, map, params?.bounds]);

  // filtering items by bounds on bounds change
  useEffect(() => {
    let items: StoreLocatorItem[];
    if (bounds) {
      items = filteredItems.filter(item => bounds.contains(item.position));
    } else {
      items = [...filteredItems];
    }
    setBoundsItems(items);
  }, [filteredItems, bounds]);

  // fires when user make a change on filters
  function onSetFilter(filter: Filter<StoreLocatorItem>, values: string[]) {
    const ids = values.map(x => parseInt(x)).filter(x => x !== 0);
    // console.log('StoreLocatorMap.onFilterChange', filter, ids);
    setFilter(filter, ids);
    // pagination.goToPage(1);
    // serializing querystring filter
    const filterParams = filtersToParams(filters);
    // replaceParamsSilently({ filter: filterParams, pagination: { page: 1 } });
    replaceParamsSilently({ filter: filterParams });
  }

  // geolocate current position
  async function onFindMe() {
    try {
      const place = await findMe();
      if (place) {
        if (autocompleteRef.current) {
          autocompleteRef.current.value = place.name;
        }
        setPlace(place);
      }
    } catch (error) {
      console.log('StoreLocatorSearch.onFindMe.error', error);
    }
  }

  // fires when user select a google autocomplete result
  async function onAutocomplete(item_: IAutocompleteItem) {
    const item = item_ as IAutocompleteResult;
    // console.log('onSelect', item);
    if (!item) {
      return;
    }
    if ('geometry' in item) {
      setPlace(item as unknown as IAutocompleteResultDetail);
    } else if (typeof item.getDetails === 'function' && mapRef.current) {
      const place = await item.getDetails(mapRef.current);
      setPlace(place);
    }
  }

  // contains logic of setting the place and bounds of the google map
  function setPlace(place: { location?: google.maps.LatLngLiteral, geometry?: google.maps.places.PlaceGeometry | google.maps.GeocoderGeometry }) {
    // const items = itemsWithOmittedKeys('bounds');
    const items = filteredItems;
    const map = mapRef.current;
    if (map) {
      if (place) {
        const geometry = place.geometry;
        const location = (geometry ? geometry.location : place.location);
        let minimumBounds = null;
        if (items.length >= 2) {
          const center = location;
          const lat = (typeof center?.lat === 'function' ? center?.lat() : center?.lat) || 0;
          const lng = (typeof center?.lng === 'function' ? center?.lng() : center?.lng) || 0;
          calculateDistances(items, { lat, lng });
          minimumBounds = new google.maps.LatLngBounds();
          for (let i = 0; i < 2; i++) {
            const item = items[i];
            const lat1 = item.position.lat;
            const lng1 = item.position.lng;
            const p1 = new google.maps.LatLng(lat1, lng1);
            minimumBounds.extend(p1);
            const lat2 = lat + (lat - lat1);
            const lng2 = lng + (lng - lng1);
            const p2 = new google.maps.LatLng(lat2, lng2);
            minimumBounds.extend(p2);
          }
        }
        if (geometry && geometry.viewport || minimumBounds) {
          let bounds = (geometry && geometry.viewport) || new google.maps.LatLngBounds();
          if (minimumBounds) {
            bounds = bounds.union(minimumBounds);
          }
          /*
          google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
            this.setZoom(Math.min(11, this.getZoom()));
          });
          // meh
          */
          map.fitBounds(bounds, 0);
        } else if (location) {
          map.setCenter(location);
          map.setZoom(11);
        }
      } else {
        const bounds = getBounds(items);
        /*
        google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
          this.setZoom(Math.min(11, this.getZoom()));
        })
        // meh;
        */
        map.fitBounds(bounds);
      }
    }
  }

  // on google map current loading status
  const onStatus = useCallback((status: string) => {
    console.log('StoreLocatorMap.onStatus', status);
    if (status === GoogleMapLoaderStatus.Success) {
      // console.log(window.google.maps);
    }
  }, []);

  // on google map loaded
  const onLoad = useCallback((map: google.maps.Map) => {
    console.log('StoreLocatorMap.onLoad', map);
    setMap(map);
  }, []);

  // on google map idle positioning status
  const onIdle = useCallback((map: google.maps.Map) => {
    // console.log('onIdle');
    // meh
    setZoom(map.getZoom() as number);
    setCenter((map.getCenter() as google.maps.LatLng).toJSON());
  }, []);

  // on google map did change bounds
  const onBounds = useCallback((bounds: google.maps.LatLngBounds | undefined) => {
    setBounds(bounds);
    replaceParamsSilently({ bounds });
  }, [setBounds, replaceParamsSilently]);

  // debounced version of the onBounds callback
  const onBoundsDebounced = useDebounceCallback(onBounds);

  // fires when user close the google map info windo
  const onInfoWindowClose = () => {
    // console.log('onInfoWindowClose');
    setInfoWindow(undefined);
  };

  // fires when user click on a marker
  const onMarkerClick = useCallback((marker: IGeoLocalized) => {
    // console.log('onMarkerClick', marker);
    const item = marker as StoreLocatorItem;
    const content = /* html */`
      <div class="info-window">
        <div class="info-window__name">${item.name}</div>
        <div class="info-window__address">${item.address}</div>
        <div class="info-window__city">${item.city}</div>
        <div class="info-window__country">${item.country.name}</div>
        ${item.phoneNumber ? /* html */`<a class="info-window__phone" href="tel:${item.phoneNumber}">${item.phoneNumber}</a>` : ''}
        ${item.faxNumber ? /* html */`<a class="info-window__fax" href="tel:${item.faxNumber}">${item.faxNumber}</a>` : ''}
        ${item.contactEmail ? /* html */`<a class="info-window__email" href="mailto:${item.contactEmail}">${item.contactEmail}</a>` : ''}
      </div>
    `;
    setInfoWindow({
      position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
      content,
    });
  }, []);

  // fires when user click on a result
  const onItemClick = (item: StoreLocatorItem) => {
    const map = mapRef.current;
    if (map) {
      map.setCenter(item.position);
      map.setZoom(11);
    }
  }

  // when user click on the map (unused)
  /*
  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    // console.log('StoreLocatorMap.onMapClick');
    // avoid directly mutating state
    // setMarkers([...markers, { position: event.latLng! }]);
  }, []);
  */

  return (
    <>
      <Section padding="2rem 0" position="relative" overflow="hidden">
        {/* <Dots /> */}
        <Container position="relative" textAlign="center" maxWidthMd="80ch">
          <Text size="10" textTransform="uppercase">{item.category}</Text>
          <Text size="2" marginBottom="1rem" fontWeight="700">{item.title}</Text>
          <Text size="8" margin="0 auto 2rem auto" maxWidth="70ch" dangerouslySetInnerHTML={{ __html: item.abstract }}></Text>
          {filters && filters.map((filter, f) => (
            <RadioOption.Group key={f} size="sm" marginBottom="1rem" initialValue={filter.values.length ? filter.values[0].toString() : "0"} onChange={(event) => onSetFilter(filter, [event.target.value])}>
              <RadioOption value="0">All</RadioOption>
              {filter.options && filter.options.map((option, o) => (
                <RadioOption key={o} value={option.id.toString()} disabled={option.count === 0}>{option.title}</RadioOption>
              ))}
            </RadioOption.Group>
          ))}
          <Flex.Row>
            <Autocomplete background="var(--color-neutral-100)" name="search" placeholder="search..." source={autocompleteSource} onAutocomplete={onAutocomplete} ref={autocompleteRef}
              before={<MapPin color="var(--color-neutral-300)" />}
              after={<Button variant="outline" onClick={onFindMe}>find me</Button>}
            />
          </Flex.Row>
        </Container>
      </Section>
      <GoogleMapLoader apiKey={API_KEY} language={locale} region={country.id} libraries={['places']} skeleton={() => <GoogleMapSkeleton></GoogleMapSkeleton>} onStatus={onStatus}>
        <GoogleMap {...googleMapOptions} height="Min(100vw, 600px)" position="relative" ref={mapRef} onLoad={onLoad} onIdle={onIdle} onBounds={onBoundsDebounced}>
          {USE_CLUSTERER ?
            <GoogleMapMarkerClusterer items={filteredItems} onClick={onMarkerClick} /> :
            USE_CLUSTERER_PLUS ?
              <GoogleMapMarkerClustererPlus items={filteredItems} onClick={onMarkerClick} /> :
              filteredItems.map((item, i) => (
                <GoogleMapMarker key={i} position={item.position} icon={"/map/marker-sm.png"} onClick={() => onMarkerClick(item)} />
              ))}
          <GoogleMapInfoWindow {...infoWindow} onClose={onInfoWindowClose} />
        </GoogleMap>
      </GoogleMapLoader>
      <Section>
        <Container minHeight="50vh">
          <Grid.Row columnGap="1rem" rowGap="1rem">
            {visibleItems.map((item, i) => (
              <Grid key={i} sm={6} md={4} lg={3}>
                <ContactCard item={item} height="100%" hoverable onClick={() => onItemClick(item)} />
              </Grid>
            ))}
          </Grid.Row>
          {hasMore && <InfiniteLoader onMore={onMore}>more</InfiniteLoader>}
        </Container>
      </Section>
    </>
  );
}

export default StoreLocatorSearch;

export interface StoreLocatorItem extends IGeoLocalized {
  id: number;
  name: string;
  address: string;
  zipCode?: string;
  city?: string;
  province?: string;
  country: {
    id: number;
    name: string
  };
  phoneNumber?: string;
  faxNumber?: string;
  contactEmail?: string;
  website?: string;
  category: {
    id: number;
    name: string
  };
  rank: number;
  distance?: number;
  related?: {
    id: number;
    url: string;
  };
}

/*
,
  {
    "id": "bounds",
    "schema": "featureType",
    "title": "Bounds",
    "mode": "query"
  }

*/
