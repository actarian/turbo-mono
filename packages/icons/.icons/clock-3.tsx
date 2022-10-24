
import React from 'react';
import Clock3Svg from '../svg/clock-3.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock3 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock3Svg {...props} ref={ref} />);
});

Clock3.displayName = 'Clock3';

export default Clock3;

// export default () => <Clock3 />;
        