
import React from 'react';
import CloudRainWindSvg from '../svg/cloud-rain-wind.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudRainWind = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudRainWindSvg {...props} ref={ref} />);
});

CloudRainWind.displayName = 'CloudRainWind';

export default CloudRainWind;

// export default () => <CloudRainWind />;
        