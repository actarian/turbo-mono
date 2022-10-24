
import React from 'react';
import MoveDiagonalSvg from '../svg/move-diagonal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MoveDiagonal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoveDiagonalSvg {...props} ref={ref} />);
});

MoveDiagonal.displayName = 'MoveDiagonal';

export default MoveDiagonal;

// export default () => <MoveDiagonal />;
        