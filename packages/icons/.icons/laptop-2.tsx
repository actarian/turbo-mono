
import React from 'react';
import Laptop2Svg from '../svg/laptop-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Laptop2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Laptop2Svg {...props} ref={ref} />);
});

Laptop2.displayName = 'Laptop2';

export default Laptop2;

// export default () => <Laptop2 />;
        