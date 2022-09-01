
import React from 'react';
import ClockSvg from '../icons/clock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClockSvg {...props} ref={ref} />);
});

Clock.displayName = 'Clock';

export default Clock;

// export default () => <Clock />;
        