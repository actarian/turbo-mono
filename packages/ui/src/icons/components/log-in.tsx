
import React from 'react';
import LogInSvg from '../icons/log-in.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogIn = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LogInSvg {...props} ref={ref} />);
});

LogIn.displayName = 'LogIn';

export default LogIn;

// export default () => <LogIn />;
        