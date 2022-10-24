
import React from 'react';
import FileVolumeSvg from '../svg/file-volume.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileVolume = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileVolumeSvg {...props} ref={ref} />);
});

FileVolume.displayName = 'FileVolume';

export default FileVolume;

// export default () => <FileVolume />;
        