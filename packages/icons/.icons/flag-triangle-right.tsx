
import React from 'react';
import FlagTriangleRightSvg from '../svg/flag-triangle-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlagTriangleRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlagTriangleRightSvg {...props} ref={ref} />);
});

FlagTriangleRight.displayName = 'FlagTriangleRight';

export default FlagTriangleRight;

// export default () => <FlagTriangleRight />;
        