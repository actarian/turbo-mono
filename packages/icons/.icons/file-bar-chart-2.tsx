
import React from 'react';
import FileBarChart2Svg from '../svg/file-bar-chart-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileBarChart2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileBarChart2Svg {...props} ref={ref} />);
});

FileBarChart2.displayName = 'FileBarChart2';

export default FileBarChart2;

// export default () => <FileBarChart2 />;
        