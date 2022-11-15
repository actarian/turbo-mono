
import React from 'react';
import LogOutSvg from '../svg/log-out.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LogOut = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LogOutSvg {...props} ref={ref} />);
});

LogOut.displayName = 'LogOut';
