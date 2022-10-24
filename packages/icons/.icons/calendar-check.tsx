
import React from 'react';
import CalendarCheckSvg from '../svg/calendar-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarCheckSvg {...props} ref={ref} />);
});

CalendarCheck.displayName = 'CalendarCheck';

export default CalendarCheck;

// export default () => <CalendarCheck />;
        