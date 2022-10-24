
import React from 'react';
import FileJsonSvg from '../svg/file-json.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileJson = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileJsonSvg {...props} ref={ref} />);
});

FileJson.displayName = 'FileJson';

export default FileJson;

// export default () => <FileJson />;
        