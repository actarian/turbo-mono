
import React from 'react';
import BikeSvg from '../svg/bike.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bike = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BikeSvg {...props} ref={ref} />);
});

Bike.displayName = 'Bike';

export default Bike;

// export default () => <Bike />;
        