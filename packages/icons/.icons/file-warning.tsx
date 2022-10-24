
import React from 'react';
import FileWarningSvg from '../svg/file-warning.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileWarning = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileWarningSvg {...props} ref={ref} />);
});

FileWarning.displayName = 'FileWarning';

export default FileWarning;

// export default () => <FileWarning />;
        