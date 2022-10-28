
import React from 'react';
import HexagonSvg from '../svg/hexagon.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Hexagon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HexagonSvg {...props} ref={ref} />);
});

Hexagon.displayName = 'Hexagon';
