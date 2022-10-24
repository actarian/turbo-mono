
import React from 'react';
import FileLock2Svg from '../svg/file-lock-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileLock2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileLock2Svg {...props} ref={ref} />);
});

FileLock2.displayName = 'FileLock2';

export default FileLock2;

// export default () => <FileLock2 />;
        