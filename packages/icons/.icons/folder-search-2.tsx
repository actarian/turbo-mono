
import React from 'react';
import FolderSearch2Svg from '../svg/folder-search-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderSearch2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderSearch2Svg {...props} ref={ref} />);
});

FolderSearch2.displayName = 'FolderSearch2';

export default FolderSearch2;

// export default () => <FolderSearch2 />;
        