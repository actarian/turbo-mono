
import React from 'react';
import ShieldCheckSvg from '../svg/shield-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShieldCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShieldCheckSvg {...props} ref={ref} />);
});

ShieldCheck.displayName = 'ShieldCheck';

export default ShieldCheck;

// export default () => <ShieldCheck />;
        