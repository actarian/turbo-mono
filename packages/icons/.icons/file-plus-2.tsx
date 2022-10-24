
import React from 'react';
import FilePlus2Svg from '../svg/file-plus-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FilePlus2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilePlus2Svg {...props} ref={ref} />);
});

FilePlus2.displayName = 'FilePlus2';

export default FilePlus2;

// export default () => <FilePlus2 />;
        