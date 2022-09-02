
import React from 'react';
import CheckSquareSvg from '../svg/check-square.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CheckSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckSquareSvg {...props} ref={ref} />);
});

CheckSquare.displayName = 'CheckSquare';

export default CheckSquare;

// export default () => <CheckSquare />;
        