
import React from 'react';
import FolderArchiveSvg from '../svg/folder-archive.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderArchive = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderArchiveSvg {...props} ref={ref} />);
});

FolderArchive.displayName = 'FolderArchive';

export default FolderArchive;

// export default () => <FolderArchive />;
        