
import React from 'react';
import CurrencySvg from '../svg/currency.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Currency = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CurrencySvg {...props} ref={ref} />);
});

Currency.displayName = 'Currency';

export default Currency;

// export default () => <Currency />;
        