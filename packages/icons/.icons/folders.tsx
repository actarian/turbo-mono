
import React from 'react';
import FoldersSvg from '../svg/folders.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Folders = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FoldersSvg {...props} ref={ref} />);
});

Folders.displayName = 'Folders';

export default Folders;

// export default () => <Folders />;
        