
import React from 'react';
import Clock11Svg from '../svg/clock-11.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock11 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock11Svg {...props} ref={ref} />);
});

Clock11.displayName = 'Clock11';

export default Clock11;

// export default () => <Clock11 />;
        