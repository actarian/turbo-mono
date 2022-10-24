
import React from 'react';
import GaugeSvg from '../svg/gauge.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Gauge = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GaugeSvg {...props} ref={ref} />);
});

Gauge.displayName = 'Gauge';

export default Gauge;

// export default () => <Gauge />;
        