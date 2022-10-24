
import React from 'react';
import ChevronsLeftRightSvg from '../svg/chevrons-left-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronsLeftRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsLeftRightSvg {...props} ref={ref} />);
});

ChevronsLeftRight.displayName = 'ChevronsLeftRight';

export default ChevronsLeftRight;

// export default () => <ChevronsLeftRight />;
        