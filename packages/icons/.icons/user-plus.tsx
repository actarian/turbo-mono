
import React from 'react';
import UserPlusSvg from '../svg/user-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserPlusSvg {...props} ref={ref} />);
});

UserPlus.displayName = 'UserPlus';

export default UserPlus;

// export default () => <UserPlus />;
        