
import React from 'react';
import Navigation2OffSvg from '../svg/navigation-2-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navigation2Off = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Navigation2OffSvg {...props} ref={ref} />);
});

Navigation2Off.displayName = 'Navigation2Off';

export default Navigation2Off;

// export default () => <Navigation2Off />;
        