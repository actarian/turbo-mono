
import React from 'react';
import FileXSvg from '../svg/file-x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileXSvg {...props} ref={ref} />);
});

FileX.displayName = 'FileX';

export default FileX;

// export default () => <FileX />;
        