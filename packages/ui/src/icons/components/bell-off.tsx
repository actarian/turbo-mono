
import React from 'react';
import BellOffSvg from '../icons/bell-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BellOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BellOffSvg {...props} ref={ref} />);
});

BellOff.displayName = 'BellOff';

export default BellOff;

// export default () => <BellOff />;
        