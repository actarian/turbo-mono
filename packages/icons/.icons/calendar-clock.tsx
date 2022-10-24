
import React from 'react';
import CalendarClockSvg from '../svg/calendar-clock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarClock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarClockSvg {...props} ref={ref} />);
});

CalendarClock.displayName = 'CalendarClock';

export default CalendarClock;

// export default () => <CalendarClock />;
        