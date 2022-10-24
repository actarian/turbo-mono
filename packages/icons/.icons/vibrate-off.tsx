
import React from 'react';
import VibrateOffSvg from '../svg/vibrate-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VibrateOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VibrateOffSvg {...props} ref={ref} />);
});

VibrateOff.displayName = 'VibrateOff';

export default VibrateOff;

// export default () => <VibrateOff />;
        