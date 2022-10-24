
import React from 'react';
import ShieldCloseSvg from '../svg/shield-close.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShieldClose = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShieldCloseSvg {...props} ref={ref} />);
});

ShieldClose.displayName = 'ShieldClose';

export default ShieldClose;

// export default () => <ShieldClose />;
        