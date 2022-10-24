
import React from 'react';
import CalendarHeartSvg from '../svg/calendar-heart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarHeart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalendarHeartSvg {...props} ref={ref} />);
});

CalendarHeart.displayName = 'CalendarHeart';

export default CalendarHeart;

// export default () => <CalendarHeart />;
        