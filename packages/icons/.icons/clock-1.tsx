
import React from 'react';
import Clock1Svg from '../svg/clock-1.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock1 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock1Svg {...props} ref={ref} />);
});

Clock1.displayName = 'Clock1';

export default Clock1;

// export default () => <Clock1 />;
        