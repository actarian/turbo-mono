
import React from 'react';
import BarChart4Svg from '../svg/bar-chart-4.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BarChart4 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BarChart4Svg {...props} ref={ref} />);
});

BarChart4.displayName = 'BarChart4';

export default BarChart4;

// export default () => <BarChart4 />;
        