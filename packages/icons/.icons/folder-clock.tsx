
import React from 'react';
import FolderClockSvg from '../svg/folder-clock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderClock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderClockSvg {...props} ref={ref} />);
});

FolderClock.displayName = 'FolderClock';

export default FolderClock;

// export default () => <FolderClock />;
        