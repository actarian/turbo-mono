
import React from 'react';
import PinSvg from '../svg/pin.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pin = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PinSvg {...props} ref={ref} />);
});

Pin.displayName = 'Pin';

export default Pin;

// export default () => <Pin />;
        