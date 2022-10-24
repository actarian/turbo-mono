
import React from 'react';
import FileLineChartSvg from '../svg/file-line-chart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileLineChart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileLineChartSvg {...props} ref={ref} />);
});

FileLineChart.displayName = 'FileLineChart';

export default FileLineChart;

// export default () => <FileLineChart />;
        