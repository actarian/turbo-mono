
import React from 'react';
import SunSvg from '../icons/sun.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sun = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunSvg {...props} ref={ref} />);
});

Sun.displayName = 'Sun';

export default Sun;

// export default () => <Sun />;
        