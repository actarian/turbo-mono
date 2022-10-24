
import React from 'react';
import FileVolume2Svg from '../svg/file-volume-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileVolume2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileVolume2Svg {...props} ref={ref} />);
});

FileVolume2.displayName = 'FileVolume2';

export default FileVolume2;

// export default () => <FileVolume2 />;
        