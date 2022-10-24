
import React from 'react';
import PizzaSvg from '../svg/pizza.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pizza = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PizzaSvg {...props} ref={ref} />);
});

Pizza.displayName = 'Pizza';

export default Pizza;

// export default () => <Pizza />;
        