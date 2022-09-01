
import React from 'react';
import BellSvg from '../icons/bell.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bell = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BellSvg {...props} ref={ref} />);
});

Bell.displayName = 'Bell';

export default Bell;

// export default () => <Bell />;
        