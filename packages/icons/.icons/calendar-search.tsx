
import React from 'react';
import CalendarSearchSvg from '../svg/calendar-search.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarSearch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarSearchSvg {...props} ref={ref} />);
});

CalendarSearch.displayName = 'CalendarSearch';

export default CalendarSearch;

// export default () => <CalendarSearch />;
        