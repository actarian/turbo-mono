
import React from 'react';
import FileMinusSvg from '../icons/file-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileMinusSvg {...props} ref={ref} />);
});

FileMinus.displayName = 'FileMinus';

export default FileMinus;

// export default () => <FileMinus />;
        