
import React from 'react';
import Clock12Svg from '../svg/clock-12.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock12 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock12Svg {...props} ref={ref} />);
});

Clock12.displayName = 'Clock12';

export default Clock12;

// export default () => <Clock12 />;
        