
import React from 'react';
import BarChartHorizontalSvg from '../svg/bar-chart-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BarChartHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BarChartHorizontalSvg {...props} ref={ref} />);
});

BarChartHorizontal.displayName = 'BarChartHorizontal';

export default BarChartHorizontal;

// export default () => <BarChartHorizontal />;
        