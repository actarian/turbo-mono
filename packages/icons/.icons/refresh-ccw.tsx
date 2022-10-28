
import React from 'react';
import RefreshCcwSvg from '../svg/refresh-ccw.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RefreshCcw = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RefreshCcwSvg {...props} ref={ref} />);
});

RefreshCcw.displayName = 'RefreshCcw';
