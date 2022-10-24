
import React from 'react';
import BedDoubleSvg from '../svg/bed-double.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BedDouble = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BedDoubleSvg {...props} ref={ref} />);
});

BedDouble.displayName = 'BedDouble';

export default BedDouble;

// export default () => <BedDouble />;
        