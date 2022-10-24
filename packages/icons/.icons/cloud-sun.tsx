
import React from 'react';
import CloudSunSvg from '../svg/cloud-sun.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudSun = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudSunSvg {...props} ref={ref} />);
});

CloudSun.displayName = 'CloudSun';

export default CloudSun;

// export default () => <CloudSun />;
        