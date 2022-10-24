
import React from 'react';
import Clock4Svg from '../svg/clock-4.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock4 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock4Svg {...props} ref={ref} />);
});

Clock4.displayName = 'Clock4';

export default Clock4;

// export default () => <Clock4 />;
        