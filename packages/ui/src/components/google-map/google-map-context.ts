import React from 'react';

const defaultContext = {
  map: undefined,
};

export type IGoogleMapContext = {
  map: google.maps.Map | undefined;
};

export const GoogleMapContext = React.createContext<IGoogleMapContext>(defaultContext);

export function useGoogleMapContext(): IGoogleMapContext {
  return React.useContext<IGoogleMapContext>(GoogleMapContext);
}
