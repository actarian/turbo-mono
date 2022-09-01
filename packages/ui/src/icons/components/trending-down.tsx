
import React from 'react';
import TrendingDownSvg from '../icons/trending-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrendingDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrendingDownSvg {...props} ref={ref} />);
});

TrendingDown.displayName = 'TrendingDown';

export default TrendingDown;

// export default () => <TrendingDown />;
        