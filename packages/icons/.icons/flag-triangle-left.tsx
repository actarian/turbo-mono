
import React from 'react';
import FlagTriangleLeftSvg from '../svg/flag-triangle-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlagTriangleLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlagTriangleLeftSvg {...props} ref={ref} />);
});

FlagTriangleLeft.displayName = 'FlagTriangleLeft';

export default FlagTriangleLeft;

// export default () => <FlagTriangleLeft />;
        