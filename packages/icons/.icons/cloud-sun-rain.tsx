
import React from 'react';
import CloudSunRainSvg from '../svg/cloud-sun-rain.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudSunRain = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudSunRainSvg {...props} ref={ref} />);
});

CloudSunRain.displayName = 'CloudSunRain';

export default CloudSunRain;

// export default () => <CloudSunRain />;
        