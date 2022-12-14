
import React from 'react';
import MinusSvg from '../svg/minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Minus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MinusSvg {...props} ref={ref} />);
});

Minus.displayName = 'Minus';
