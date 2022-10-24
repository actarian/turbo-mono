
import React from 'react';
import ShirtSvg from '../svg/shirt.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Shirt = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShirtSvg {...props} ref={ref} />);
});

Shirt.displayName = 'Shirt';

export default Shirt;

// export default () => <Shirt />;
        