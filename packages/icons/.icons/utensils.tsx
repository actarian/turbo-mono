
import React from 'react';
import UtensilsSvg from '../svg/utensils.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Utensils = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UtensilsSvg {...props} ref={ref} />);
});

Utensils.displayName = 'Utensils';

export default Utensils;

// export default () => <Utensils />;
        