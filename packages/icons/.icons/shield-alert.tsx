
import React from 'react';
import ShieldAlertSvg from '../svg/shield-alert.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShieldAlert = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShieldAlertSvg {...props} ref={ref} />);
});

ShieldAlert.displayName = 'ShieldAlert';

export default ShieldAlert;

// export default () => <ShieldAlert />;
        