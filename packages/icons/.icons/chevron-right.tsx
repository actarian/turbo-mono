
import React from 'react';
import ChevronRightSvg from '../svg/chevron-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChevronRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronRightSvg {...props} ref={ref} />);
});

ChevronRight.displayName = 'ChevronRight';
