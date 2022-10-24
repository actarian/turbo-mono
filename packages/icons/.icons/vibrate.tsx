
import React from 'react';
import VibrateSvg from '../svg/vibrate.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Vibrate = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VibrateSvg {...props} ref={ref} />);
});

Vibrate.displayName = 'Vibrate';

export default Vibrate;

// export default () => <Vibrate />;
        