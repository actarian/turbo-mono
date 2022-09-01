
import React from 'react';
import ShoppingCartSvg from '../icons/shopping-cart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShoppingCart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShoppingCartSvg {...props} ref={ref} />);
});

ShoppingCart.displayName = 'ShoppingCart';

export default ShoppingCart;

// export default () => <ShoppingCart />;
        