
import React from 'react';
import FileKey2Svg from '../svg/file-key-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileKey2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileKey2Svg {...props} ref={ref} />);
});

FileKey2.displayName = 'FileKey2';

export default FileKey2;

// export default () => <FileKey2 />;
        