import { getCurrentPosition } from '@websolute/hooks';
import { IAutocompleteItem } from '../../forms/autocomplete/autocomplete-context';

export type IGeoPosition = { lat: number, lng: number };

export type IGeoLocalized = {
  position: IGeoPosition;
  distance?: number;
}

export function calculateDistances(items: IGeoLocalized[], center: IGeoPosition): IGeoLocalized[] {
  if (items) {
    items.forEach((item) => {
      item.distance = calculateDistance(item.position.lat, item.position.lng, center.lat, center.lng, 'K');
    });
    items.sort((a, b) => {
      return a.distance as number - (b.distance as number);
    });
  }
  return items;
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number, unit: 'K' | 'N'): number {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  } else {
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
      dist = dist * 1.609344;
    }
    if (unit == 'N') {
      dist = dist * 0.8684;
    }
    return dist;
  }
}

export function getBounds(items: IGeoLocalized[], count: number = Number.POSITIVE_INFINITY): google.maps.LatLngBounds {
  const bounds = new google.maps.LatLngBounds();
  items.forEach((item, i) => {
    if (i < count) {
      const position = new google.maps.LatLng(item.position.lat, item.position.lng);
      bounds.extend(position);
    }
  });
  return bounds;
}

let autocompleteService_: google.maps.places.AutocompleteService;
export function getAutocompleteService(): google.maps.places.AutocompleteService {
  if (!autocompleteService_ && hasMaps()) {
    autocompleteService_ = new google.maps.places.AutocompleteService();
  }
  return autocompleteService_;
}

let geocoder_: google.maps.Geocoder;
export function getGeocoder(): google.maps.Geocoder {
  if (!geocoder_ && hasMaps()) {
    geocoder_ = new google.maps.Geocoder();
  }
  return geocoder_;
}

let placeService_: google.maps.places.PlacesService;
export function getPlacesService(map: google.maps.Map): google.maps.places.PlacesService {
  if (!placeService_ && map) {
    placeService_ = new google.maps.places.PlacesService(map);
  }
  return placeService_;
}

export type IAutocompleteResult = IAutocompleteItem & {
  id: string;
  name: string;
  description: string;
  getDetails: (map: google.maps.Map) => Promise<IAutocompleteResultDetail>;
}

export type IAutocompleteResultDetail = {
  streetNumber: string;
  route: string;
  locality: string;
  zipCode: string;
  city: string;
  province: string;
  country: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  geometry: google.maps.places.PlaceGeometry | undefined,
}

export type IAutocompleteResultWithDetail = IAutocompleteResult & IAutocompleteResultDetail;

export function autocompleteSource(query: string): Promise<IAutocompleteResult[]> {
  const autocompleteService = getAutocompleteService();
  return new Promise((resolve, reject) => {
    const options = {
      input: query,
      // fields: ["formatted_address", "geometry", "name"],
      // strictBounds: false,
      // types: ["locality", "sublocality", "postal_code", "country", "administrative_area_level_1", "administrative_area_level_2", "administrative_area_level_3"],
    };
    // console.log('GoogleMapsService.autocomplete$', options);
    autocompleteService.getPlacePredictions(options, (predictions, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && predictions && predictions.length) {
        const results = predictions.map(prediction => {
          // console.log(prediction);
          return {
            id: prediction.place_id,
            name: prediction.description,
            description: prediction.description,
            /*
            lat: prediction.geometry.location.lat(),
            lng: prediction.geometry.location.lng(),
            */
            getDetails: (map: google.maps.Map) => {
              const request = {
                placeId: prediction.place_id,
                fields: ['name', 'address_component', 'geometry.location', 'geometry.viewport'],
              };
              return new Promise<IAutocompleteResultDetail>((resolve, reject) => {
                const placeService = getPlacesService(map);
                placeService.getDetails(request, (place, status) => {
                  if (status == google.maps.places.PlacesServiceStatus.OK && place) {
                    // console.log(place);
                    const components = place.address_components;
                    const streetNumber = components && components.find((x) => x.types.includes('street_number'));
                    const streetNumberName = streetNumber ? streetNumber.short_name : '';
                    const route = components && components.find((x) => x.types.includes('route'));
                    const routeName = route ? route.short_name : '';
                    const locality = components && components.find((x) => x.types.includes('locality'));
                    const localityName = locality ? locality.short_name : '';
                    const postal_code = components && components.find((x) => x.types.includes('postal_code'));
                    const zipCode = postal_code ? postal_code.short_name : '';
                    const city = components && components.find((x) => x.types.includes('administrative_area_level_3'));
                    const cityName = city ? city.short_name : '';
                    const province = components && components.find((x) => x.types.includes('administrative_area_level_2'));
                    const provinceName = province ? province.short_name : '';
                    const country = components && components.find((x) => x.types.includes('country'));
                    const countryName = country ? country.long_name : '';
                    const address = (route ? routeName : '') + (streetNumber ? ', ' + streetNumberName : '') + (locality && (!city || cityName !== localityName) ? ', ' + localityName : '');
                    // console.log(place);
                    const location = place.geometry ? place.geometry.location : null;
                    const latitude = location ? location.lat() : null;
                    const longitude = location ? location.lng() : null;
                    resolve({
                      streetNumber: streetNumberName,
                      route: routeName,
                      locality: localityName,
                      zipCode: zipCode,
                      city: cityName,
                      province: provinceName,
                      country: countryName,
                      address: address,
                      latitude: latitude,
                      longitude: longitude,
                      geometry: place.geometry,
                    });
                  } else {
                    reject(status);
                  }
                });
              });
            }
          };
        });
        resolve(results);
      } else {
        reject(status);
      }
    });
  });
}

export function geocode(request: google.maps.GeocoderRequest): Promise<google.maps.GeocoderResult[] | null> {
  return new Promise((resolve, reject) => {
    const geocoder = getGeocoder();
    geocoder.geocode(request, (results, status) => {
      if (status == 'OK') {
        resolve(results);
      } else {
        reject(results);
      }
    });
  });
}

export type IFindMeResult = {
  id: string;
  name: string;
  location: google.maps.LatLngLiteral;
  geometry?: google.maps.GeocoderGeometry;
}

export async function findMe(options?: PositionOptions, type = 'administrative_area_level_3'): Promise<IFindMeResult | null> {
  if (!hasMaps()) {
    throw ('google maps not available');
  }
  const position = await getCurrentPosition(options);
  const location = {
    lat: position.latitude as number,
    lng: position.longitude as number,
  };
  const results = await geocode({ location });
  let place = null;
  if (results) {
    place = results.find(x => x.types.includes(type));
    if (place) {
      const address = place.address_components.find(x => x.types.includes(type));
      place = {
        id: place.place_id,
        name: address ? address.long_name : 'current location',
        location,
        geometry: place.geometry,
      }
    }
  }
  // console.log('StoreLocatorComponent.onGeolocation', place);
  return place || null;
}

function hasMaps(): boolean {
  return Boolean(google && google.maps);
}
