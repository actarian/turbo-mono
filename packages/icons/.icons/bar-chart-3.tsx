
import React from 'react';
import BarChart3Svg from '../svg/bar-chart-3.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BarChart3 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BarChart3Svg {...props} ref={ref} />);
});

BarChart3.displayName = 'BarChart3';

export default BarChart3;

// export default () => <BarChart3 />;
        