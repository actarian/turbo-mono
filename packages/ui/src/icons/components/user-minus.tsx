
import React from 'react';
import UserMinusSvg from '../icons/user-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserMinusSvg {...props} ref={ref} />);
});

UserMinus.displayName = 'UserMinus';

export default UserMinus;

// export default () => <UserMinus />;
        