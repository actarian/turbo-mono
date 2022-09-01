
import React from 'react';
import UploadSvg from '../icons/upload.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Upload = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UploadSvg {...props} ref={ref} />);
});

Upload.displayName = 'Upload';

export default Upload;

// export default () => <Upload />;
        