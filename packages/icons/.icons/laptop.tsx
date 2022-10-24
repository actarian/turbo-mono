
import React from 'react';
import LaptopSvg from '../svg/laptop.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Laptop = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LaptopSvg {...props} ref={ref} />);
});

Laptop.displayName = 'Laptop';

export default Laptop;

// export default () => <Laptop />;
        