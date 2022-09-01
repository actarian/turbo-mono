
import React from 'react';
import SunriseSvg from '../icons/sunrise.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sunrise = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunriseSvg {...props} ref={ref} />);
});

Sunrise.displayName = 'Sunrise';

export default Sunrise;

// export default () => <Sunrise />;
        