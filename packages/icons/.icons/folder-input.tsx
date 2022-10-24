
import React from 'react';
import FolderInputSvg from '../svg/folder-input.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderInput = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderInputSvg {...props} ref={ref} />);
});

FolderInput.displayName = 'FolderInput';

export default FolderInput;

// export default () => <FolderInput />;
        