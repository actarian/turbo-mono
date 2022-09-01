
import React from 'react';
import PieChartSvg from '../icons/pie-chart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PieChart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PieChartSvg {...props} ref={ref} />);
});

PieChart.displayName = 'PieChart';

export default PieChart;

// export default () => <PieChart />;
        