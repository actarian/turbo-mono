
import React from 'react';
import MapPinSvg from '../icons/map-pin.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MapPin = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MapPinSvg {...props} ref={ref} />);
});

MapPin.displayName = 'MapPin';

export default MapPin;

// export default () => <MapPin />;
        