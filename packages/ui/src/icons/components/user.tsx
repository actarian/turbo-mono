
import React from 'react';
import UserSvg from '../icons/user.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const User = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserSvg {...props} ref={ref} />);
});

User.displayName = 'User';

export default User;

// export default () => <User />;
        