
import React from 'react';
import CalendarPlusSvg from '../svg/calendar-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarPlusSvg {...props} ref={ref} />);
});

CalendarPlus.displayName = 'CalendarPlus';

export default CalendarPlus;

// export default () => <CalendarPlus />;
        