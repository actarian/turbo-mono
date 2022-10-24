
import React from 'react';
import FolderLockSvg from '../svg/folder-lock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderLock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderLockSvg {...props} ref={ref} />);
});

FolderLock.displayName = 'FolderLock';

export default FolderLock;

// export default () => <FolderLock />;
        