
import React from 'react';
import ChevronsLeftSvg from '../icons/chevrons-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronsLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsLeftSvg {...props} ref={ref} />);
});

ChevronsLeft.displayName = 'ChevronsLeft';

export default ChevronsLeft;

// export default () => <ChevronsLeft />;
        