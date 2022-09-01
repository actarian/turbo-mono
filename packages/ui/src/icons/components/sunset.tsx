
import React from 'react';
import SunsetSvg from '../icons/sunset.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sunset = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunsetSvg {...props} ref={ref} />);
});

Sunset.displayName = 'Sunset';

export default Sunset;

// export default () => <Sunset />;
        