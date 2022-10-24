
import React from 'react';
import FileOutputSvg from '../svg/file-output.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileOutput = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileOutputSvg {...props} ref={ref} />);
});

FileOutput.displayName = 'FileOutput';

export default FileOutput;

// export default () => <FileOutput />;
        