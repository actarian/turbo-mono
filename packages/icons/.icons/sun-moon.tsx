
import React from 'react';
import SunMoonSvg from '../svg/sun-moon.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SunMoon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunMoonSvg {...props} ref={ref} />);
});

SunMoon.displayName = 'SunMoon';

export default SunMoon;

// export default () => <SunMoon />;
        