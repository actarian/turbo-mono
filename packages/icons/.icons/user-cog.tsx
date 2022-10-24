
import React from 'react';
import UserCogSvg from '../svg/user-cog.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserCog = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserCogSvg {...props} ref={ref} />);
});

UserCog.displayName = 'UserCog';

export default UserCog;

// export default () => <UserCog />;
        