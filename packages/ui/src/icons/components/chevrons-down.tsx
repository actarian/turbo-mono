
import React from 'react';
import ChevronsDownSvg from '../icons/chevrons-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronsDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsDownSvg {...props} ref={ref} />);
});

ChevronsDown.displayName = 'ChevronsDown';

export default ChevronsDown;

// export default () => <ChevronsDown />;
        