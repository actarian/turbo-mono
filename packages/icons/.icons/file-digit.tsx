
import React from 'react';
import FileDigitSvg from '../svg/file-digit.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileDigit = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileDigitSvg {...props} ref={ref} />);
});

FileDigit.displayName = 'FileDigit';

export default FileDigit;

// export default () => <FileDigit />;
        