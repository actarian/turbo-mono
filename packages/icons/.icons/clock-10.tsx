
import React from 'react';
import Clock10Svg from '../svg/clock-10.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock10 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock10Svg {...props} ref={ref} />);
});

Clock10.displayName = 'Clock10';

export default Clock10;

// export default () => <Clock10 />;
        