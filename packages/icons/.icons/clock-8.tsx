
import React from 'react';
import Clock8Svg from '../svg/clock-8.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock8 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock8Svg {...props} ref={ref} />);
});

Clock8.displayName = 'Clock8';

export default Clock8;

// export default () => <Clock8 />;
        