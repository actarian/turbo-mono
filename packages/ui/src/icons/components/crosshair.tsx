
import React from 'react';
import CrosshairSvg from '../icons/crosshair.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Crosshair = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CrosshairSvg {...props} ref={ref} />);
});

Crosshair.displayName = 'Crosshair';

export default Crosshair;

// export default () => <Crosshair />;
        