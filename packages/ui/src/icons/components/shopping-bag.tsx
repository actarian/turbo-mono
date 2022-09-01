
import React from 'react';
import ShoppingBagSvg from '../icons/shopping-bag.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShoppingBag = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShoppingBagSvg {...props} ref={ref} />);
});

ShoppingBag.displayName = 'ShoppingBag';

export default ShoppingBag;

// export default () => <ShoppingBag />;
        