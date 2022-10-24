
import React from 'react';
import InfinitySvg from '../svg/infinity.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Infinity = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<InfinitySvg {...props} ref={ref} />);
});

Infinity.displayName = 'Infinity';

export default Infinity;

// export default () => <Infinity />;
        