
import React from 'react';
import LifeBuoySvg from '../icons/life-buoy.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LifeBuoy = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LifeBuoySvg {...props} ref={ref} />);
});

LifeBuoy.displayName = 'LifeBuoy';

export default LifeBuoy;

// export default () => <LifeBuoy />;
        