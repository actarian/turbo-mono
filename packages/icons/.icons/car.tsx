
import React from 'react';
import CarSvg from '../svg/car.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Car = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CarSvg {...props} ref={ref} />);
});

Car.displayName = 'Car';

export default Car;

// export default () => <Car />;
        