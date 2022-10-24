
import React from 'react';
import CloudySvg from '../svg/cloudy.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cloudy = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudySvg {...props} ref={ref} />);
});

Cloudy.displayName = 'Cloudy';

export default Cloudy;

// export default () => <Cloudy />;
        