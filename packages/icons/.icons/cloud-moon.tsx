
import React from 'react';
import CloudMoonSvg from '../svg/cloud-moon.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudMoon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudMoonSvg {...props} ref={ref} />);
});

CloudMoon.displayName = 'CloudMoon';

export default CloudMoon;

// export default () => <CloudMoon />;
        