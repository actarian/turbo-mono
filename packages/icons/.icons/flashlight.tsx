
import React from 'react';
import FlashlightSvg from '../svg/flashlight.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Flashlight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlashlightSvg {...props} ref={ref} />);
});

Flashlight.displayName = 'Flashlight';

export default Flashlight;

// export default () => <Flashlight />;
        