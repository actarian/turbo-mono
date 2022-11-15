
import React from 'react';
import LogInSvg from '../svg/log-in.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LogIn = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LogInSvg {...props} ref={ref} />);
});

LogIn.displayName = 'LogIn';
