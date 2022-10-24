
import React from 'react';
import TimerSvg from '../svg/timer.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Timer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TimerSvg {...props} ref={ref} />);
});

Timer.displayName = 'Timer';

export default Timer;

// export default () => <Timer />;
        