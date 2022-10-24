
import React from 'react';
import IndianRupeeSvg from '../svg/indian-rupee.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IndianRupee = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IndianRupeeSvg {...props} ref={ref} />);
});

IndianRupee.displayName = 'IndianRupee';

export default IndianRupee;

// export default () => <IndianRupee />;
        