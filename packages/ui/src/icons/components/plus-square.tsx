
import React from 'react';
import PlusSquareSvg from '../icons/plus-square.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlusSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlusSquareSvg {...props} ref={ref} />);
});

PlusSquare.displayName = 'PlusSquare';

export default PlusSquare;

// export default () => <PlusSquare />;
        