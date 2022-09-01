
import React from 'react';
import FolderSvg from '../icons/folder.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Folder = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderSvg {...props} ref={ref} />);
});

Folder.displayName = 'Folder';

export default Folder;

// export default () => <Folder />;
        