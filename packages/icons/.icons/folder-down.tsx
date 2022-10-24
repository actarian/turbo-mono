
import React from 'react';
import FolderDownSvg from '../svg/folder-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderDownSvg {...props} ref={ref} />);
});

FolderDown.displayName = 'FolderDown';

export default FolderDown;

// export default () => <FolderDown />;
        