
import React from 'react';
import FileKeySvg from '../svg/file-key.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileKey = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileKeySvg {...props} ref={ref} />);
});

FileKey.displayName = 'FileKey';

export default FileKey;

// export default () => <FileKey />;
        