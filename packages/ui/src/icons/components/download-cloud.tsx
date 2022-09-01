
import React from 'react';
import DownloadCloudSvg from '../icons/download-cloud.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DownloadCloud = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DownloadCloudSvg {...props} ref={ref} />);
});

DownloadCloud.displayName = 'DownloadCloud';

export default DownloadCloud;

// export default () => <DownloadCloud />;
        