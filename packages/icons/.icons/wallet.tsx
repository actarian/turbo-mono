
import React from 'react';
import WalletSvg from '../svg/wallet.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wallet = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WalletSvg {...props} ref={ref} />);
});

Wallet.displayName = 'Wallet';

export default Wallet;

// export default () => <Wallet />;
        