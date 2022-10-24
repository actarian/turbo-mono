
import React from 'react';
import FolderXSvg from '../svg/folder-x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderXSvg {...props} ref={ref} />);
});

FolderX.displayName = 'FolderX';

export default FolderX;

// export default () => <FolderX />;
        