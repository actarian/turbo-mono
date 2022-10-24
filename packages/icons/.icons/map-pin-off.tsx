
import React from 'react';
import MapPinOffSvg from '../svg/map-pin-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MapPinOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MapPinOffSvg {...props} ref={ref} />);
});

MapPinOff.displayName = 'MapPinOff';

export default MapPinOff;

// export default () => <MapPinOff />;
        