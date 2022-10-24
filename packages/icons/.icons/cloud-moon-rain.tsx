
import React from 'react';
import CloudMoonRainSvg from '../svg/cloud-moon-rain.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudMoonRain = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudMoonRainSvg {...props} ref={ref} />);
});

CloudMoonRain.displayName = 'CloudMoonRain';

export default CloudMoonRain;

// export default () => <CloudMoonRain />;
        