
import React from 'react';
import MonitorOffSvg from '../svg/monitor-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MonitorOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MonitorOffSvg {...props} ref={ref} />);
});

MonitorOff.displayName = 'MonitorOff';

export default MonitorOff;

// export default () => <MonitorOff />;
        