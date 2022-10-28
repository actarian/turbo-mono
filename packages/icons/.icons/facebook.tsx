
import React from 'react';
import FacebookSvg from '../svg/facebook.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Facebook = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FacebookSvg {...props} ref={ref} />);
});

Facebook.displayName = 'Facebook';
