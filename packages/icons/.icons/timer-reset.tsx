
import React from 'react';
import TimerResetSvg from '../svg/timer-reset.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimerReset = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TimerResetSvg {...props} ref={ref} />);
});

TimerReset.displayName = 'TimerReset';

export default TimerReset;

// export default () => <TimerReset />;
        