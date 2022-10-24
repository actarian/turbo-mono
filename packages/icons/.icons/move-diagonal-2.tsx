
import React from 'react';
import MoveDiagonal2Svg from '../svg/move-diagonal-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MoveDiagonal2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoveDiagonal2Svg {...props} ref={ref} />);
});

MoveDiagonal2.displayName = 'MoveDiagonal2';

export default MoveDiagonal2;

// export default () => <MoveDiagonal2 />;
        