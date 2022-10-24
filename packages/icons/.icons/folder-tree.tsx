
import React from 'react';
import FolderTreeSvg from '../svg/folder-tree.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderTree = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderTreeSvg {...props} ref={ref} />);
});

FolderTree.displayName = 'FolderTree';

export default FolderTree;

// export default () => <FolderTree />;
        