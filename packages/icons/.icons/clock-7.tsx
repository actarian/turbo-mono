
import React from 'react';
import Clock7Svg from '../svg/clock-7.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock7 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock7Svg {...props} ref={ref} />);
});

Clock7.displayName = 'Clock7';

export default Clock7;

// export default () => <Clock7 />;
        