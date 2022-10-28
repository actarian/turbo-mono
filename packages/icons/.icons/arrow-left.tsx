
import React from 'react';
import ArrowLeftSvg from '../svg/arrow-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ArrowLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowLeftSvg {...props} ref={ref} />);
});

ArrowLeft.displayName = 'ArrowLeft';
