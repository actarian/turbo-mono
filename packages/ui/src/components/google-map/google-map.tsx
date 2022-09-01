import { Box, ComponentCssResponsiveProps } from '@ui-components';
import { forwardRef, ReactNode, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { GoogleMapContext, IGoogleMapContext } from './google-map-context';
import { GoogleMapStyle } from './google-map.style';

export interface Props extends google.maps.MapOptions {
  onLoad?: (map: google.maps.Map) => void;
  onIdle?: (map: google.maps.Map) => void;
  onBounds?: (map: google.maps.LatLngBounds | undefined) => void;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  children?: ReactNode;
}

export type GoogleMapProps = ComponentCssResponsiveProps<Props, HTMLDivElement>

const StyledBox = styled(Box)`
  &,
  iframe {
    background-color: var(--color-primary-100);
  }
  .gm-style-cc {
    display: none;
  }
`;



const GoogleMap = forwardRef<google.maps.Map, GoogleMapProps>(({
  onLoad,
  onIdle,
  onBounds,
  onClick,
  children,
  ...options
}: GoogleMapProps, ref) => {

  options.height = options.height || '600px';

  options.zoom = options.zoom || 8;
  options.center = options.center || { lat: 43.6263318, lng: 12.6790557 };
  options.styles = options.styles || GoogleMapStyle;

  const [map, setMap] = useState<google.maps.Map>();

  const mapRef = useRef<google.maps.Map>();

  const innerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => mapRef.current as google.maps.Map); // switch to map

  const contextValue: IGoogleMapContext = useMemo(() => ({
    map,
  }), [map]);

  useEffect(() => {
    if (!mapRef.current && innerRef.current) {
      const map_ = new google.maps.Map(innerRef.current, options);
      mapRef.current = map_;
      setMap(map_);
      if (onLoad) {
        onLoad(map_);
      }
    }
  }, [options, onLoad]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  /*
  useDeepCompareEffectForMaps(() => {
    const map = mapRef.current;
    if (map) {
      map.setOptions(options);
    }
  }, [mapRef, options]);
  */

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      /*
      ['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );
      */
      if (onIdle || onBounds) {
        map.addListener('idle', () => {
          onIdle ? onIdle(map) : null;
          if (onBounds) {
            const bounds = map.getBounds();
            onBounds(bounds);
          }
        });
      }
      if (onClick) {
        map.addListener('click', onClick);
      }
    }
    return () => {
      // meh
      /*
      if (map) {
        map.unbindAll();
      }
      */
    }
  }, [mapRef, onLoad, onIdle, onClick, onBounds]);

  return (
    <GoogleMapContext.Provider value={contextValue}>
      <StyledBox ref={innerRef} id="map" {...options} />
      {children}
    </GoogleMapContext.Provider>
  );

  /*
  return (
    <GoogleMapContext.Provider value={contextValue}>
      <StyledBox ref={innerRef} id="map" {...options} />
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        // set the map prop on the child component
        return React.cloneElement(child, { map: mapRef.current });
      })}
    </GoogleMapContext.Provider>
  );
  */
});

GoogleMap.displayName = 'GoogleMap';

export default GoogleMap;
