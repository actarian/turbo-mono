
import React from 'react';
import DownloadSvg from '../icons/download.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Download = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DownloadSvg {...props} ref={ref} />);
});

Download.displayName = 'Download';

export default Download;

// export default () => <Download />;
        