
import React from 'react';
import FileArchiveSvg from '../svg/file-archive.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileArchive = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileArchiveSvg {...props} ref={ref} />);
});

FileArchive.displayName = 'FileArchive';

export default FileArchive;

// export default () => <FileArchive />;
        