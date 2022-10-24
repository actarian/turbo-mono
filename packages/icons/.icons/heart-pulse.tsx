
import React from 'react';
import HeartPulseSvg from '../svg/heart-pulse.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeartPulse = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HeartPulseSvg {...props} ref={ref} />);
});

HeartPulse.displayName = 'HeartPulse';

export default HeartPulse;

// export default () => <HeartPulse />;
        