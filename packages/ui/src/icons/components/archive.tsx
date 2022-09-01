
import React from 'react';
import ArchiveSvg from '../icons/archive.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Archive = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArchiveSvg {...props} ref={ref} />);
});

Archive.displayName = 'Archive';

export default Archive;

// export default () => <Archive />;
        