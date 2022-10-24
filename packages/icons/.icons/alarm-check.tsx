
import React from 'react';
import AlarmCheckSvg from '../svg/alarm-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlarmCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlarmCheckSvg {...props} ref={ref} />);
});

AlarmCheck.displayName = 'AlarmCheck';

export default AlarmCheck;

// export default () => <AlarmCheck />;
        