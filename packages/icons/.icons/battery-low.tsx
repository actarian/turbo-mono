
import React from 'react';
import BatteryLowSvg from '../svg/battery-low.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BatteryLow = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BatteryLowSvg {...props} ref={ref} />);
});

BatteryLow.displayName = 'BatteryLow';

export default BatteryLow;

// export default () => <BatteryLow />;
        