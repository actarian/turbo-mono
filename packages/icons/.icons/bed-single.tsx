
import React from 'react';
import BedSingleSvg from '../svg/bed-single.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BedSingle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BedSingleSvg {...props} ref={ref} />);
});

BedSingle.displayName = 'BedSingle';

export default BedSingle;

// export default () => <BedSingle />;
        