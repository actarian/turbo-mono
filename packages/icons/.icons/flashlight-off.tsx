
import React from 'react';
import FlashlightOffSvg from '../svg/flashlight-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlashlightOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlashlightOffSvg {...props} ref={ref} />);
});

FlashlightOff.displayName = 'FlashlightOff';

export default FlashlightOff;

// export default () => <FlashlightOff />;
        