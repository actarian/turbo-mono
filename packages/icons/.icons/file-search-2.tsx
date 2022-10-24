
import React from 'react';
import FileSearch2Svg from '../svg/file-search-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileSearch2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileSearch2Svg {...props} ref={ref} />);
});

FileSearch2.displayName = 'FileSearch2';

export default FileSearch2;

// export default () => <FileSearch2 />;
        