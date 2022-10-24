
import React from 'react';
import FileVideoSvg from '../svg/file-video.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileVideo = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileVideoSvg {...props} ref={ref} />);
});

FileVideo.displayName = 'FileVideo';

export default FileVideo;

// export default () => <FileVideo />;
        