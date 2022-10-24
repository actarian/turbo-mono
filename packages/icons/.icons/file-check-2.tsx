
import React from 'react';
import FileCheck2Svg from '../svg/file-check-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileCheck2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileCheck2Svg {...props} ref={ref} />);
});

FileCheck2.displayName = 'FileCheck2';

export default FileCheck2;

// export default () => <FileCheck2 />;
        