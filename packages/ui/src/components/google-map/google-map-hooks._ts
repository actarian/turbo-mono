
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import { createCustomEqual } from 'fast-equals';
import React, { useEffect } from 'react';

export const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a: any, b: any) => {
  if (isLatLngLiteral(a) ||
    a instanceof google.maps.LatLng ||
    isLatLngLiteral(b) ||
    b instanceof google.maps.LatLng) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }
  // TODO extend to other types
  // use fast-equals for other objects
  return deepEqual(a, b);
});

export function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();
  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

export function useDeepCompareEffectForMaps(callback: React.EffectCallback, dependencies: any[]) {
  useEffect(callback, dependencies.map(useDeepCompareMemoize));
}
