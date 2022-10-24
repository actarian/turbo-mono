
import React from 'react';
import CalendarMinusSvg from '../svg/calendar-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarMinusSvg {...props} ref={ref} />);
});

CalendarMinus.displayName = 'CalendarMinus';

export default CalendarMinus;

// export default () => <CalendarMinus />;
        