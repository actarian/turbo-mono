
import React from 'react';
import FileTextSvg from '../icons/file-text.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileText = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileTextSvg {...props} ref={ref} />);
});

FileText.displayName = 'FileText';

export default FileText;

// export default () => <FileText />;
        