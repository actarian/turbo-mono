
import React from 'react';
import Clock6Svg from '../svg/clock-6.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock6 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock6Svg {...props} ref={ref} />);
});

Clock6.displayName = 'Clock6';

export default Clock6;

// export default () => <Clock6 />;
        