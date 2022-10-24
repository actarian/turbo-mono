
import React from 'react';
import FileBarChartSvg from '../svg/file-bar-chart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileBarChart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileBarChartSvg {...props} ref={ref} />);
});

FileBarChart.displayName = 'FileBarChart';

export default FileBarChart;

// export default () => <FileBarChart />;
        