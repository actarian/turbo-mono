
import React from 'react';
import FileScanSvg from '../svg/file-scan.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileScan = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileScanSvg {...props} ref={ref} />);
});

FileScan.displayName = 'FileScan';

export default FileScan;

// export default () => <FileScan />;
        