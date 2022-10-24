
import React from 'react';
import ArchiveRestoreSvg from '../svg/archive-restore.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArchiveRestore = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArchiveRestoreSvg {...props} ref={ref} />);
});

ArchiveRestore.displayName = 'ArchiveRestore';

export default ArchiveRestore;

// export default () => <ArchiveRestore />;
        