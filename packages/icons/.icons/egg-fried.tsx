
import React from 'react';
import EggFriedSvg from '../svg/egg-fried.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EggFried = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EggFriedSvg {...props} ref={ref} />);
});

EggFried.displayName = 'EggFried';

export default EggFried;

// export default () => <EggFried />;
        