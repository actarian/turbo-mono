
import React from 'react';
import XCircleSvg from '../svg/x-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const XCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XCircleSvg {...props} ref={ref} />);
});

XCircle.displayName = 'XCircle';
