
import React from 'react';
import ArrowRightSvg from '../svg/arrow-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ArrowRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowRightSvg {...props} ref={ref} />);
});

ArrowRight.displayName = 'ArrowRight';
