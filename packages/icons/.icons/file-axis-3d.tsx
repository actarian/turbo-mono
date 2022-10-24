
import React from 'react';
import FileAxis3dSvg from '../svg/file-axis-3d.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileAxis3d = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileAxis3dSvg {...props} ref={ref} />);
});

FileAxis3d.displayName = 'FileAxis3d';

export default FileAxis3d;

// export default () => <FileAxis3d />;
        