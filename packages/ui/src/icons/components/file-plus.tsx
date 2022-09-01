
import React from 'react';
import FilePlusSvg from '../icons/file-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FilePlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilePlusSvg {...props} ref={ref} />);
});

FilePlus.displayName = 'FilePlus';

export default FilePlus;

// export default () => <FilePlus />;
        