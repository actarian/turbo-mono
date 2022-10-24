
import React from 'react';
import CalendarXSvg from '../svg/calendar-x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarXSvg {...props} ref={ref} />);
});

CalendarX.displayName = 'CalendarX';

export default CalendarX;

// export default () => <CalendarX />;
        