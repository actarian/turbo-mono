
import React from 'react';
import FolderMinusSvg from '../icons/folder-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderMinusSvg {...props} ref={ref} />);
});

FolderMinus.displayName = 'FolderMinus';

export default FolderMinus;

// export default () => <FolderMinus />;
        