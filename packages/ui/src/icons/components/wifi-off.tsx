
import React from 'react';
import WifiOffSvg from '../icons/wifi-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WifiOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WifiOffSvg {...props} ref={ref} />);
});

WifiOff.displayName = 'WifiOff';

export default WifiOff;

// export default () => <WifiOff />;
        