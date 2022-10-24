
import React from 'react';
import FileSymlinkSvg from '../svg/file-symlink.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileSymlink = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileSymlinkSvg {...props} ref={ref} />);
});

FileSymlink.displayName = 'FileSymlink';

export default FileSymlink;

// export default () => <FileSymlink />;
        