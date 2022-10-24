
import React from 'react';
import LineChartSvg from '../svg/line-chart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LineChart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LineChartSvg {...props} ref={ref} />);
});

LineChart.displayName = 'LineChart';

export default LineChart;

// export default () => <LineChart />;
        