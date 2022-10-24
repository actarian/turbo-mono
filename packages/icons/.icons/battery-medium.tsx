
import React from 'react';
import BatteryMediumSvg from '../svg/battery-medium.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BatteryMedium = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BatteryMediumSvg {...props} ref={ref} />);
});

BatteryMedium.displayName = 'BatteryMedium';

export default BatteryMedium;

// export default () => <BatteryMedium />;
        