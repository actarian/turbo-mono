
import React from 'react';
import TruckSvg from '../svg/truck.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Truck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TruckSvg {...props} ref={ref} />);
});

Truck.displayName = 'Truck';
