
import React from 'react';
import ShieldSvg from '../icons/shield.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Shield = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShieldSvg {...props} ref={ref} />);
});

Shield.displayName = 'Shield';

export default Shield;

// export default () => <Shield />;
        