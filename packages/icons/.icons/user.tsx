
import React from 'react';
import UserSvg from '../svg/user.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const User = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserSvg {...props} ref={ref} />);
});

User.displayName = 'User';
