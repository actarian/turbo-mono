
import React from 'react';
import IceCreamSvg from '../svg/ice-cream.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IceCream = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IceCreamSvg {...props} ref={ref} />);
});

IceCream.displayName = 'IceCream';

export default IceCream;

// export default () => <IceCream />;
        