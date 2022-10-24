
import React from 'react';
import CalendarDaysSvg from '../svg/calendar-days.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarDays = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarDaysSvg {...props} ref={ref} />);
});

CalendarDays.displayName = 'CalendarDays';

export default CalendarDays;

// export default () => <CalendarDays />;
        