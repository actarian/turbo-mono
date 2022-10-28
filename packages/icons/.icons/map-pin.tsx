
import React from 'react';
import MapPinSvg from '../svg/map-pin.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MapPin = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MapPinSvg {...props} ref={ref} />);
});

MapPin.displayName = 'MapPin';
