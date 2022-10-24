
import React from 'react';
import TimerOffSvg from '../svg/timer-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimerOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TimerOffSvg {...props} ref={ref} />);
});

TimerOff.displayName = 'TimerOff';

export default TimerOff;

// export default () => <TimerOff />;
        