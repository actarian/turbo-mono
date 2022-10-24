
import React from 'react';
import BaggageClaimSvg from '../svg/baggage-claim.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BaggageClaim = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BaggageClaimSvg {...props} ref={ref} />);
});

BaggageClaim.displayName = 'BaggageClaim';

export default BaggageClaim;

// export default () => <BaggageClaim />;
        