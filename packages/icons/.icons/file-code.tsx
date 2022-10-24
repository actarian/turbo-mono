
import React from 'react';
import FileCodeSvg from '../svg/file-code.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileCode = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileCodeSvg {...props} ref={ref} />);
});

FileCode.displayName = 'FileCode';

export default FileCode;

// export default () => <FileCode />;
        