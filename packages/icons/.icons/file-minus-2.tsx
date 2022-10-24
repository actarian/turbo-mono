
import React from 'react';
import FileMinus2Svg from '../svg/file-minus-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileMinus2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileMinus2Svg {...props} ref={ref} />);
});

FileMinus2.displayName = 'FileMinus2';

export default FileMinus2;

// export default () => <FileMinus2 />;
        