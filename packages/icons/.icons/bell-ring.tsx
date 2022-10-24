
import React from 'react';
import BellRingSvg from '../svg/bell-ring.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BellRing = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BellRingSvg {...props} ref={ref} />);
});

BellRing.displayName = 'BellRing';

export default BellRing;

// export default () => <BellRing />;
        