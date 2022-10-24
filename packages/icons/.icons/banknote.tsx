
import React from 'react';
import BanknoteSvg from '../svg/banknote.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Banknote = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BanknoteSvg {...props} ref={ref} />);
});

Banknote.displayName = 'Banknote';

export default Banknote;

// export default () => <Banknote />;
        