
import React from 'react';
import FolderCheckSvg from '../svg/folder-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderCheckSvg {...props} ref={ref} />);
});

FolderCheck.displayName = 'FolderCheck';

export default FolderCheck;

// export default () => <FolderCheck />;
        