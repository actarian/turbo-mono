
import React from 'react';
import MonitorSvg from '../icons/monitor.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Monitor = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MonitorSvg {...props} ref={ref} />);
});

Monitor.displayName = 'Monitor';

export default Monitor;

// export default () => <Monitor />;
        