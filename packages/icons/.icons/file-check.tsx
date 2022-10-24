
import React from 'react';
import FileCheckSvg from '../svg/file-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileCheckSvg {...props} ref={ref} />);
});

FileCheck.displayName = 'FileCheck';

export default FileCheck;

// export default () => <FileCheck />;
        