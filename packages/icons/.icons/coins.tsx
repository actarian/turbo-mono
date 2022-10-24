
import React from 'react';
import CoinsSvg from '../svg/coins.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Coins = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CoinsSvg {...props} ref={ref} />);
});

Coins.displayName = 'Coins';

export default Coins;

// export default () => <Coins />;
        