
import React from 'react';
import FilePieChartSvg from '../svg/file-pie-chart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FilePieChart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilePieChartSvg {...props} ref={ref} />);
});

FilePieChart.displayName = 'FilePieChart';

export default FilePieChart;

// export default () => <FilePieChart />;
        