
import React from 'react';
import FileDownSvg from '../svg/file-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileDownSvg {...props} ref={ref} />);
});

FileDown.displayName = 'FileDown';

export default FileDown;

// export default () => <FileDown />;
        