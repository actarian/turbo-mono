
import React from 'react';
import UsersSvg from '../icons/users.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Users = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UsersSvg {...props} ref={ref} />);
});

Users.displayName = 'Users';

export default Users;

// export default () => <Users />;
        