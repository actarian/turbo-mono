import MarkerClustererPlus, { ClusterIconStyle } from '@googlemaps/markerclustererplus';
import React, { useEffect, useState } from 'react';
import { useGoogleMapContext } from "./google-map-context";
import { IGeoLocalized } from "./google-map.service";

export interface GoogleMapMarkerClustererPlusProps {
  items: IGeoLocalized[];
  map?: google.maps.Map,
  onClick?: (item: IGeoLocalized) => void;
}

const GoogleMapMarkerClustererPlus: React.FC<GoogleMapMarkerClustererPlusProps> = ({
  items = [],
  onClick,
}) => {

  const { map } = useGoogleMapContext();

  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  useEffect(() => {
    let markers_: google.maps.Marker[] = [];
    if (!map) {
      return;
    }
    const onClick_ = (item: IGeoLocalized) => {
      if (onClick) {
        onClick(item);
      }
    }
    // markersDispose(markers);
    if (items.length) {
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
    }
    return () => {
      markersDispose(markers_);
    };
  }, [items, map, onClick]);

  useEffect(() => {
    let clusterer: MarkerClustererPlus;
    if (map && markers) {
      console.log('clusterer init');
      clusterer = new MarkerClustererPlus(map, markers, {
        imagePath: `/map/cluster-`,
      });
      const styles = clusterer.getStyles();
      const sizes = [48, 56, 64, 72, 80];
      styles.forEach((style: ClusterIconStyle, i: number) => {
        style.width = sizes[i];
        style.height = sizes[i];
        style.textLineHeight = sizes[i];
        style.textSize = Math.floor(style.width / 5);
        style.textColor = '#ffffff';
      });
      clusterer.setStyles(styles);
    }
    // remove clusterer from map on unmount
    return () => {
      console.log('clusterer dispose');
      clustererDispose(clusterer);
      markersDispose(markers);
    };
  }, [map, markers]);

  return null;
};

export default GoogleMapMarkerClustererPlus;

function markerDispose(marker:google.maps.Marker) {
  marker.setMap(null);
  marker.unbindAll();
}

function markersDispose(markers?:google.maps.Marker[]) {
  if (markers) {
    markers.forEach(x => markerDispose(x));
  }
}

function clustererDispose(clusterer?: MarkerClustererPlus) {
  if (clusterer) {
    clusterer.clearMarkers();
    clusterer.setMap(null);
  }
}
