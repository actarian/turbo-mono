
import React from 'react';
import PiggyBankSvg from '../svg/piggy-bank.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PiggyBank = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PiggyBankSvg {...props} ref={ref} />);
});

PiggyBank.displayName = 'PiggyBank';

export default PiggyBank;

// export default () => <PiggyBank />;
        