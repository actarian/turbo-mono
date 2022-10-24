
import React from 'react';
import FileX2Svg from '../svg/file-x-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileX2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileX2Svg {...props} ref={ref} />);
});

FileX2.displayName = 'FileX2';

export default FileX2;

// export default () => <FileX2 />;
        