
import React from 'react';
import PinOffSvg from '../svg/pin-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PinOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PinOffSvg {...props} ref={ref} />);
});

PinOff.displayName = 'PinOff';

export default PinOff;

// export default () => <PinOff />;
        