// import MarkerClusterer from '@googlemaps/markerclustererplus';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import React, { useEffect, useState } from 'react';
import { useGoogleMapContext } from "./google-map-context";
import { IGeoLocalized } from "./google-map.service";

export interface GoogleMapMarkerClustererProps {
  items: IGeoLocalized[];
  map?: google.maps.Map,
  onClick?: (item: IGeoLocalized) => void;
}

const GoogleMapMarkerClusterer: React.FC<GoogleMapMarkerClustererProps> = ({
  items = [],
  onClick,
}) => {

  const { map } = useGoogleMapContext();

  const [markers, setMarkers] = useState<google.maps.Marker[]>();

  useEffect(() => {
    let markers_:google.maps.Marker[] = [];
    if (!map) {
      return;
    }
    const onClick_ = (item: IGeoLocalized) => {
      if (onClick) {
        onClick(item);
      }
    }
    markers_ = items.map(item => {
      const icon = {
        url: `/map/marker-sm.png`,
        size: new google.maps.Size(24, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 32),
        // scaledSize: new google.maps.Size(25, 25)
      };
      const marker = new google.maps.Marker({
        position: item.position,
        icon,
        map,
      });
      marker.addListener('click', () => {
        onClick_(item);
      });
      return marker;
    });
    setMarkers(markers_);
    // remove marker from map on unmount
    return () => {
      markers_.forEach(x => x.unbindAll());
    };
  }, [items, map, onClick]);

  useEffect(() => {
    let instance:MarkerClusterer;
    if (map && markers) {
      // console.log('MarkerClusterer 2', map);
      /*
      const instance = new MarkerClusterer(map, markers, {
        imagePath: `/map/cluster-`,
      });
      */
      console.log('MarkerClusterer');
      instance = new MarkerClusterer({
        map,
        markers,
        // algorithm: new NoopAlgorithm({}),
        // algorithm: new GridAlgorithm({ maxDistance: 40000 }),
        // algorithm: new SuperClusterAlgorithm({}),
        renderer: {
          render: ({ markers, position }) => {
            const count = markers ? markers.length : 0;
            const size = Math.max(1, Math.min(5, Math.ceil(count / 5)));
            const icon = {
              url: `/map/cluster-${size}.png`,
              size: new google.maps.Size(40 + size * 8, 40 + size * 8),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              // scaledSize: new google.maps.Size(25, 25)
            };
            return new google.maps.Marker({
              position: {
                lat: position.lat(),
                lng: position.lng(),
              },
              map,
              /*
              // do not use label cause it is very slow
              label: {
                text: count.toString(),
                color: 'white',
                fontSize: '12px',
              },
              */
              icon,
            });
          },
        }
      });
      /*
      const styles = instance.getStyles();
      const sizes = [48, 56, 64, 72, 80];
      styles.forEach((style: any, i: number) => {
        style.width = sizes[i];
        style.height = sizes[i];
        style.textLineHeight = sizes[i];
        style.textSize = Math.floor(style.width / 5);
        style.textColor = '#ffffff';
      });
      instance.setStyles(styles);
      */
    }
    // remove clusterer from map on unmount
    return () => {
      if (instance) {
        instance.clearMarkers();
        instance.setMap(null);
      }
    };
  }, [map, markers]);

  return null;
};

export default GoogleMapMarkerClusterer;
