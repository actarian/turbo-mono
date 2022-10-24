
import React from 'react';
import FileType2Svg from '../svg/file-type-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileType2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileType2Svg {...props} ref={ref} />);
});

FileType2.displayName = 'FileType2';

export default FileType2;

// export default () => <FileType2 />;
        