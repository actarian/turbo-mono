
import React from 'react';
import Clock9Svg from '../svg/clock-9.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock9 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock9Svg {...props} ref={ref} />);
});

Clock9.displayName = 'Clock9';

export default Clock9;

// export default () => <Clock9 />;
        