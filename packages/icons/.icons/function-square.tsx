
import React from 'react';
import FunctionSquareSvg from '../svg/function-square.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FunctionSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FunctionSquareSvg {...props} ref={ref} />);
});

FunctionSquare.displayName = 'FunctionSquare';

export default FunctionSquare;

// export default () => <FunctionSquare />;
        