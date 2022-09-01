import React, { MouseEvent, useEffect, useState } from 'react';
import { useGoogleMapContext } from './google-map-context';

export type InfoWindow = {
  position: google.maps.LatLng;
  content: string;
}

export interface GoogleMapInfoWindowProps extends google.maps.InfoWindowOptions {
  map?: google.maps.Map;
  position?: google.maps.LatLng;
  content?: string;
  onClose?: (event: MouseEvent<HTMLElement>) => void;
}

const GoogleMapInfoWindow: React.FC<GoogleMapInfoWindowProps> = ({
  position,
  content,
  onClose,
  ...options
}) => {
  options.pixelOffset = options.pixelOffset || new google.maps.Size(0, -35);

  const { map } = useGoogleMapContext();

  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow>();

  useEffect(() => {
    if (!map) {
      return;
    }
    const onClose_ = (event: MouseEvent<HTMLElement>) => {
      if (onClose) {
        onClose(event);
      }
    };
    if (!infoWindow) {
      const instance = new google.maps.InfoWindow(options);
      instance.addListener('closeclick', onClose_)
      setInfoWindow(instance);
    } else {
      if (position) {
        infoWindow.setPosition(position);
        infoWindow.setContent(content);
        infoWindow.open(map);
      } else {
        infoWindow.close();
      }
    }
    // remove infoWindow from map on unmount
    return () => {
      if (infoWindow) {
        // infoWindow.close();
        infoWindow.unbindAll();
      }
    };
  }, [infoWindow, position, map, options, content, onClose]);

  /*
  useEffect(() => {
    if (infoWindow) {
      infoWindow.setOptions(options);
    }
  }, [infoWindow, options]);
  */

  return null;
};

export default GoogleMapInfoWindow;
