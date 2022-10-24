
import React from 'react';
import FileUpSvg from '../svg/file-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileUpSvg {...props} ref={ref} />);
});

FileUp.displayName = 'FileUp';

export default FileUp;

// export default () => <FileUp />;
        