
import React from 'react';
import XSvg from '../svg/x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const X = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XSvg {...props} ref={ref} />);
});

X.displayName = 'X';
