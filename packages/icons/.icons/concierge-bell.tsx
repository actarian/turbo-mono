
import React from 'react';
import ConciergeBellSvg from '../svg/concierge-bell.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConciergeBell = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ConciergeBellSvg {...props} ref={ref} />);
});

ConciergeBell.displayName = 'ConciergeBell';

export default ConciergeBell;

// export default () => <ConciergeBell />;
        