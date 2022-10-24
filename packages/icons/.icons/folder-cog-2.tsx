
import React from 'react';
import FolderCog2Svg from '../svg/folder-cog-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderCog2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderCog2Svg {...props} ref={ref} />);
});

FolderCog2.displayName = 'FolderCog2';

export default FolderCog2;

// export default () => <FolderCog2 />;
        