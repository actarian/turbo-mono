
import React from 'react';
import SunSnowSvg from '../svg/sun-snow.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SunSnow = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunSnowSvg {...props} ref={ref} />);
});

SunSnow.displayName = 'SunSnow';

export default SunSnow;

// export default () => <SunSnow />;
        