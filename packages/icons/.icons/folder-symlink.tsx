
import React from 'react';
import FolderSymlinkSvg from '../svg/folder-symlink.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderSymlink = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderSymlinkSvg {...props} ref={ref} />);
});

FolderSymlink.displayName = 'FolderSymlink';

export default FolderSymlink;

// export default () => <FolderSymlink />;
        