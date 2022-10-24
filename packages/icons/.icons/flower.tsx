
import React from 'react';
import FlowerSvg from '../svg/flower.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Flower = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlowerSvg {...props} ref={ref} />);
});

Flower.displayName = 'Flower';

export default Flower;

// export default () => <Flower />;
        