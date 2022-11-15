
import React from 'react';
import BoxSvg from '../svg/box.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Box = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BoxSvg {...props} ref={ref} />);
});

Box.displayName = 'Box';
