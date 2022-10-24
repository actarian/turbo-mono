
import React from 'react';
import AlarmPlusSvg from '../svg/alarm-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlarmPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlarmPlusSvg {...props} ref={ref} />);
});

AlarmPlus.displayName = 'AlarmPlus';

export default AlarmPlus;

// export default () => <AlarmPlus />;
        