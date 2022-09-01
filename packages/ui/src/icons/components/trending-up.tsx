
import React from 'react';
import TrendingUpSvg from '../icons/trending-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrendingUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrendingUpSvg {...props} ref={ref} />);
});

TrendingUp.displayName = 'TrendingUp';

export default TrendingUp;

// export default () => <TrendingUp />;
        