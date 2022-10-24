
import React from 'react';
import FileTypeSvg from '../svg/file-type.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileType = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileTypeSvg {...props} ref={ref} />);
});

FileType.displayName = 'FileType';

export default FileType;

// export default () => <FileType />;
        