
import React from 'react';
import FileJson2Svg from '../svg/file-json-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileJson2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileJson2Svg {...props} ref={ref} />);
});

FileJson2.displayName = 'FileJson2';

export default FileJson2;

// export default () => <FileJson2 />;
        