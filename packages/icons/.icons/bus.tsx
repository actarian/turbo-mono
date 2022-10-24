
import React from 'react';
import BusSvg from '../svg/bus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BusSvg {...props} ref={ref} />);
});

Bus.displayName = 'Bus';

export default Bus;

// export default () => <Bus />;
        