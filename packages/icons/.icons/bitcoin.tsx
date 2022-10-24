
import React from 'react';
import BitcoinSvg from '../svg/bitcoin.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bitcoin = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BitcoinSvg {...props} ref={ref} />);
});

Bitcoin.displayName = 'Bitcoin';

export default Bitcoin;

// export default () => <Bitcoin />;
        