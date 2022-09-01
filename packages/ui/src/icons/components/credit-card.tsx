
import React from 'react';
import CreditCardSvg from '../icons/credit-card.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreditCard = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CreditCardSvg {...props} ref={ref} />);
});

CreditCard.displayName = 'CreditCard';

export default CreditCard;

// export default () => <CreditCard />;
        