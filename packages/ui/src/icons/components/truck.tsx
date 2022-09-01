
import React from 'react';
import TruckSvg from '../icons/truck.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Truck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TruckSvg {...props} ref={ref} />);
});

Truck.displayName = 'Truck';

export default Truck;

// export default () => <Truck />;
        