
import React from 'react';
import CupSodaSvg from '../svg/cup-soda.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CupSoda = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CupSodaSvg {...props} ref={ref} />);
});

CupSoda.displayName = 'CupSoda';

export default CupSoda;

// export default () => <CupSoda />;
        