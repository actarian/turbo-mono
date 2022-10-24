
import React from 'react';
import FileAudioSvg from '../svg/file-audio.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileAudio = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileAudioSvg {...props} ref={ref} />);
});

FileAudio.displayName = 'FileAudio';

export default FileAudio;

// export default () => <FileAudio />;
        