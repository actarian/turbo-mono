
import React from 'react';
import SunMediumSvg from '../svg/sun-medium.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SunMedium = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunMediumSvg {...props} ref={ref} />);
});

SunMedium.displayName = 'SunMedium';

export default SunMedium;

// export default () => <SunMedium />;
        