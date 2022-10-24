
import React from 'react';
import Clock5Svg from '../svg/clock-5.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock5 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock5Svg {...props} ref={ref} />);
});

Clock5.displayName = 'Clock5';

export default Clock5;

// export default () => <Clock5 />;
        