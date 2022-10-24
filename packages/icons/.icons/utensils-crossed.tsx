
import React from 'react';
import UtensilsCrossedSvg from '../svg/utensils-crossed.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UtensilsCrossed = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UtensilsCrossedSvg {...props} ref={ref} />);
});

UtensilsCrossed.displayName = 'UtensilsCrossed';

export default UtensilsCrossed;

// export default () => <UtensilsCrossed />;
        