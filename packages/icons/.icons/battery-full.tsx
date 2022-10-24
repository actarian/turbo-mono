
import React from 'react';
import BatteryFullSvg from '../svg/battery-full.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BatteryFull = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BatteryFullSvg {...props} ref={ref} />);
});

BatteryFull.displayName = 'BatteryFull';

export default BatteryFull;

// export default () => <BatteryFull />;
        