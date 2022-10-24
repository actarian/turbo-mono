
import React from 'react';
import Clock2Svg from '../svg/clock-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock2Svg {...props} ref={ref} />);
});

Clock2.displayName = 'Clock2';

export default Clock2;

// export default () => <Clock2 />;
        