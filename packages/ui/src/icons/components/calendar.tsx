
import React from 'react';
import CalendarSvg from '../icons/calendar.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Calendar = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarSvg {...props} ref={ref} />);
});

Calendar.displayName = 'Calendar';

export default Calendar;

// export default () => <Calendar />;
        