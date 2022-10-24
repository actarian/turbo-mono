
import React from 'react';
import FilesSvg from '../svg/files.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Files = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilesSvg {...props} ref={ref} />);
});

Files.displayName = 'Files';

export default Files;

// export default () => <Files />;
        