
import React from 'react';
import FileSvg from '../svg/file.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const File = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileSvg {...props} ref={ref} />);
});

File.displayName = 'File';

export default File;

// export default () => <File />;
        