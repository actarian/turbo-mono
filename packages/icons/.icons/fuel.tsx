
import React from 'react';
import FuelSvg from '../svg/fuel.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Fuel = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FuelSvg {...props} ref={ref} />);
});

Fuel.displayName = 'Fuel';

export default Fuel;

// export default () => <Fuel />;
        