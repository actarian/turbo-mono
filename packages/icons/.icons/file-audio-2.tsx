
import React from 'react';
import FileAudio2Svg from '../svg/file-audio-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileAudio2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileAudio2Svg {...props} ref={ref} />);
});

FileAudio2.displayName = 'FileAudio2';

export default FileAudio2;

// export default () => <FileAudio2 />;
        