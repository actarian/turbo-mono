
import React from 'react';
import MinusSquareSvg from '../icons/minus-square.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MinusSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MinusSquareSvg {...props} ref={ref} />);
});

MinusSquare.displayName = 'MinusSquare';

export default MinusSquare;

// export default () => <MinusSquare />;
        