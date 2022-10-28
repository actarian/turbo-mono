
import React from 'react';
import ShoppingCartSvg from '../svg/shopping-cart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ShoppingCart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShoppingCartSvg {...props} ref={ref} />);
});

ShoppingCart.displayName = 'ShoppingCart';
