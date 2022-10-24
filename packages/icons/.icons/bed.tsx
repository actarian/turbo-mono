
import React from 'react';
import BedSvg from '../svg/bed.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bed = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BedSvg {...props} ref={ref} />);
});

Bed.displayName = 'Bed';

export default Bed;

// export default () => <Bed />;
        