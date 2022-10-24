
import React from 'react';
import FileInputSvg from '../svg/file-input.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileInput = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileInputSvg {...props} ref={ref} />);
});

FileInput.displayName = 'FileInput';

export default FileInput;

// export default () => <FileInput />;
        