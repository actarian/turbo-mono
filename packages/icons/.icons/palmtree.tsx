
import React from 'react';
import PalmtreeSvg from '../svg/palmtree.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Palmtree = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PalmtreeSvg {...props} ref={ref} />);
});

Palmtree.displayName = 'Palmtree';

export default Palmtree;

// export default () => <Palmtree />;
        