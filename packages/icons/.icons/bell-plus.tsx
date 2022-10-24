
import React from 'react';
import BellPlusSvg from '../svg/bell-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BellPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BellPlusSvg {...props} ref={ref} />);
});

BellPlus.displayName = 'BellPlus';

export default BellPlus;

// export default () => <BellPlus />;
        