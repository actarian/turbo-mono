
import React from 'react';
import Flower2Svg from '../svg/flower-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Flower2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Flower2Svg {...props} ref={ref} />);
});

Flower2.displayName = 'Flower2';

export default Flower2;

// export default () => <Flower2 />;
        