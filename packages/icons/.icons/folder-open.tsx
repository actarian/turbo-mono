
import React from 'react';
import FolderOpenSvg from '../svg/folder-open.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderOpen = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderOpenSvg {...props} ref={ref} />);
});

FolderOpen.displayName = 'FolderOpen';

export default FolderOpen;

// export default () => <FolderOpen />;
        