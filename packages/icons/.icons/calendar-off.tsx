
import React from 'react';
import CalendarOffSvg from '../svg/calendar-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarOffSvg {...props} ref={ref} />);
});

CalendarOff.displayName = 'CalendarOff';

export default CalendarOff;

// export default () => <CalendarOff />;
        