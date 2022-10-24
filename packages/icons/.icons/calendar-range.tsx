
import React from 'react';
import CalendarRangeSvg from '../svg/calendar-range.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarRange = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarRangeSvg {...props} ref={ref} />);
});

CalendarRange.displayName = 'CalendarRange';

export default CalendarRange;

// export default () => <CalendarRange />;
        