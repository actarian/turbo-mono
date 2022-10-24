
import React from 'react';
import FileImageSvg from '../svg/file-image.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileImage = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileImageSvg {...props} ref={ref} />);
});

FileImage.displayName = 'FileImage';

export default FileImage;

// export default () => <FileImage />;
        