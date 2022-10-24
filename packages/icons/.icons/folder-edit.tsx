
import React from 'react';
import FolderEditSvg from '../svg/folder-edit.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderEdit = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderEditSvg {...props} ref={ref} />);
});

FolderEdit.displayName = 'FolderEdit';

export default FolderEdit;

// export default () => <FolderEdit />;
        