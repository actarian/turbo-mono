
import React from 'react';
import ChevronLeftSvg from '../svg/chevron-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChevronLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronLeftSvg {...props} ref={ref} />);
});

ChevronLeft.displayName = 'ChevronLeft';
