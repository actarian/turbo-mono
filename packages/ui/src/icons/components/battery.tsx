
import React from 'react';
import BatterySvg from '../icons/battery.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Battery = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BatterySvg {...props} ref={ref} />);
});

Battery.displayName = 'Battery';

export default Battery;

// export default () => <Battery />;
        