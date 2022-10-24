
import React from 'react';
import FileVideo2Svg from '../svg/file-video-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileVideo2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileVideo2Svg {...props} ref={ref} />);
});

FileVideo2.displayName = 'FileVideo2';

export default FileVideo2;

// export default () => <FileVideo2 />;
        