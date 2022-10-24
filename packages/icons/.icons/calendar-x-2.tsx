
import React from 'react';
import CalendarX2Svg from '../svg/calendar-x-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarX2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarX2Svg {...props} ref={ref} />);
});

CalendarX2.displayName = 'CalendarX2';

export default CalendarX2;

// export default () => <CalendarX2 />;
        