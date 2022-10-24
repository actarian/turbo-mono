
import React from 'react';
import AlarmClockSvg from '../svg/alarm-clock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlarmClock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlarmClockSvg {...props} ref={ref} />);
});

AlarmClock.displayName = 'AlarmClock';

export default AlarmClock;

// export default () => <AlarmClock />;
        