
import React from 'react';
import BellMinusSvg from '../svg/bell-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BellMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BellMinusSvg {...props} ref={ref} />);
});

BellMinus.displayName = 'BellMinus';

export default BellMinus;

// export default () => <BellMinus />;
        