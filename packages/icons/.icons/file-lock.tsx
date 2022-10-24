
import React from 'react';
import FileLockSvg from '../svg/file-lock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileLock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileLockSvg {...props} ref={ref} />);
});

FileLock.displayName = 'FileLock';

export default FileLock;

// export default () => <FileLock />;
        