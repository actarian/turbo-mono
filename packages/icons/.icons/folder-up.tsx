
import React from 'react';
import FolderUpSvg from '../svg/folder-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderUpSvg {...props} ref={ref} />);
});

FolderUp.displayName = 'FolderUp';

export default FolderUp;

// export default () => <FolderUp />;
        