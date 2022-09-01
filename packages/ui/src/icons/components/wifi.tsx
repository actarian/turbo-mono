
import React from 'react';
import WifiSvg from '../icons/wifi.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wifi = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WifiSvg {...props} ref={ref} />);
});

Wifi.displayName = 'Wifi';

export default Wifi;

// export default () => <Wifi />;
        