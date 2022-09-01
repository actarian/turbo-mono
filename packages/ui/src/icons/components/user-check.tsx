
import React from 'react';
import UserCheckSvg from '../icons/user-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserCheckSvg {...props} ref={ref} />);
});

UserCheck.displayName = 'UserCheck';

export default UserCheck;

// export default () => <UserCheck />;
        