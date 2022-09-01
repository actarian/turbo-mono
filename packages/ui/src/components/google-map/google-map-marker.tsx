import React, { MouseEvent, useEffect, useState } from 'react';
import { useGoogleMapContext } from './google-map-context';

export interface GoogleMapMarkerProps extends google.maps.MarkerOptions {
  map?: google.maps.Map,
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const GoogleMapMarker: React.FC<GoogleMapMarkerProps> = ({
  onClick,
  ...options
}) => {

  const { map } = useGoogleMapContext();

  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    let instance:google.maps.Marker;
    if (!marker && map) {
      const onClick_ = (event: MouseEvent<HTMLElement>) => {
        if (onClick) {
          onClick(event);
        }
      };
      instance = new google.maps.Marker();
      instance.setMap(map);
      instance.addListener('click', onClick_)
      setMarker(instance);
    } else if (marker && map) {
      marker.setMap(map);
    }
    return () => {
      if (instance) {
        instance.setMap(null);
        instance.unbindAll()
      }
    };
  }, [marker, map, onClick]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

export default GoogleMapMarker;
