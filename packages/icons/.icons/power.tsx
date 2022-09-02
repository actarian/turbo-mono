
import React from 'react';
import PowerSvg from '../svg/power.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Power = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PowerSvg {...props} ref={ref} />);
});

Power.displayName = 'Power';

export default Power;

// export default () => <Power />;
        