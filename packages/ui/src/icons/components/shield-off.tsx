
import React from 'react';
import ShieldOffSvg from '../icons/shield-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShieldOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShieldOffSvg {...props} ref={ref} />);
});

ShieldOff.displayName = 'ShieldOff';

export default ShieldOff;

// export default () => <ShieldOff />;
        