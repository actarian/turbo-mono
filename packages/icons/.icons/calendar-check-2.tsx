
import React from 'react';
import CalendarCheck2Svg from '../svg/calendar-check-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarCheck2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarCheck2Svg {...props} ref={ref} />);
});

CalendarCheck2.displayName = 'CalendarCheck2';

export default CalendarCheck2;

// export default () => <CalendarCheck2 />;
        