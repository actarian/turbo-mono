
import React from 'react';
import CompassSvg from '../icons/compass.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Compass = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CompassSvg {...props} ref={ref} />);
});

Compass.displayName = 'Compass';

export default Compass;

// export default () => <Compass />;
        