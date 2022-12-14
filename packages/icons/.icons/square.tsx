
import React from 'react';
import SquareSvg from '../svg/square.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Square = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SquareSvg {...props} ref={ref} />);
});

Square.displayName = 'Square';
