
import React from 'react';
import FolderOutputSvg from '../svg/folder-output.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderOutput = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderOutputSvg {...props} ref={ref} />);
});

FolderOutput.displayName = 'FolderOutput';

export default FolderOutput;

// export default () => <FolderOutput />;
        