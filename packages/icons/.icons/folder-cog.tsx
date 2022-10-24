
import React from 'react';
import FolderCogSvg from '../svg/folder-cog.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderCog = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderCogSvg {...props} ref={ref} />);
});

FolderCog.displayName = 'FolderCog';

export default FolderCog;

// export default () => <FolderCog />;
        