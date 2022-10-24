
import React from 'react';
import FolderKeySvg from '../svg/folder-key.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderKey = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderKeySvg {...props} ref={ref} />);
});

FolderKey.displayName = 'FolderKey';

export default FolderKey;

// export default () => <FolderKey />;
        