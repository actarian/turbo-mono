
/**
 * @desc Made compatible with {GeolocationPositionError} and {PositionError} cause
 * PositionError been renamed to GeolocationPositionError in typescript 4.1.x and making
 * own compatible interface is most easiest way to avoid errors.
 */
export interface IGeolocationPositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}

export interface GeoLocationSensorState {
  loading: boolean;
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
  timestamp: number | null;
  error?: Error | IGeolocationPositionError;
}

export function getCurrentPosition(options?: PositionOptions): Promise<GeoLocationSensorState> {
  return new Promise<GeoLocationSensorState>((resolve, reject) => {
    if (!hasGeolocation()) {
      reject('geolocation not available');
    }
    navigator.geolocation.getCurrentPosition((event: GeolocationPosition) => {
      const result: GeoLocationSensorState = {
        loading: false,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp,
      };
      resolve(result);
    }, (error: IGeolocationPositionError) => {
      const sensorError: GeoLocationSensorState = {
        loading: false,
        error,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
      }
      reject(sensorError);
    }, options);
  });
}

export function hasGeolocation(): boolean {
  return Boolean(navigator && navigator.geolocation);
}
