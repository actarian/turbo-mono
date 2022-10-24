
import React from 'react';
import AlarmClockOffSvg from '../svg/alarm-clock-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlarmClockOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlarmClockOffSvg {...props} ref={ref} />);
});

AlarmClockOff.displayName = 'AlarmClockOff';

export default AlarmClockOff;

// export default () => <AlarmClockOff />;
        