
import React from 'react';
import CalendarSvg from '../svg/calendar.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Calendar = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarSvg {...props} ref={ref} />);
});

Calendar.displayName = 'Calendar';
