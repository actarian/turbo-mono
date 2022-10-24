
import React from 'react';
import SmartphoneChargingSvg from '../svg/smartphone-charging.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SmartphoneCharging = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SmartphoneChargingSvg {...props} ref={ref} />);
});

SmartphoneCharging.displayName = 'SmartphoneCharging';

export default SmartphoneCharging;

// export default () => <SmartphoneCharging />;
        