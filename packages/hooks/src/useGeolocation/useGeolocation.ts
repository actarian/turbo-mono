import { useEffect, useState } from 'react';
import { GeoLocationSensorState, IGeolocationPositionError } from './geolocation.service';

export function useGeolocation(options?: PositionOptions): GeoLocationSensorState {

  const [state, setState] = useState<GeoLocationSensorState>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
  });

  let mounted = true;
  let watchId: number;

  const onEvent: PositionCallback = (event: GeolocationPosition) => {
    if (mounted) {
      setState({
        loading: false,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp,
      });
    }
  };

  const onEventError = (error: IGeolocationPositionError) =>
    mounted && setState((oldState) => ({ ...oldState, loading: false, error }));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
}
