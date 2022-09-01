
import React from 'react';
import DollarSignSvg from '../icons/dollar-sign.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DollarSign = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DollarSignSvg {...props} ref={ref} />);
});

DollarSign.displayName = 'DollarSign';

export default DollarSign;

// export default () => <DollarSign />;
        