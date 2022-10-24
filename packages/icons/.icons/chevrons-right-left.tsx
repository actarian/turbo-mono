
import React from 'react';
import ChevronsRightLeftSvg from '../svg/chevrons-right-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronsRightLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsRightLeftSvg {...props} ref={ref} />);
});

ChevronsRightLeft.displayName = 'ChevronsRightLeft';

export default ChevronsRightLeft;

// export default () => <ChevronsRightLeft />;
        