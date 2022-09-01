
import React from 'react';
import UploadCloudSvg from '../icons/upload-cloud.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UploadCloud = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UploadCloudSvg {...props} ref={ref} />);
});

UploadCloud.displayName = 'UploadCloud';

export default UploadCloud;

// export default () => <UploadCloud />;
        