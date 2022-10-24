
import React from 'react';
import FolderClosedSvg from '../svg/folder-closed.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderClosed = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderClosedSvg {...props} ref={ref} />);
});

FolderClosed.displayName = 'FolderClosed';

export default FolderClosed;

// export default () => <FolderClosed />;
        