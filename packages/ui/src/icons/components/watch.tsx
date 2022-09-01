
import React from 'react';
import WatchSvg from '../icons/watch.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Watch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WatchSvg {...props} ref={ref} />);
});

Watch.displayName = 'Watch';

export default Watch;

// export default () => <Watch />;
        