
import React from 'react';
import AlarmMinusSvg from '../svg/alarm-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlarmMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlarmMinusSvg {...props} ref={ref} />);
});

AlarmMinus.displayName = 'AlarmMinus';

export default AlarmMinus;

// export default () => <AlarmMinus />;
        