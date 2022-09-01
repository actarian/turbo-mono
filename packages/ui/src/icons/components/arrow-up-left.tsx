
import React from 'react';
import ArrowUpLeftSvg from '../icons/arrow-up-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowUpLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpLeftSvg {...props} ref={ref} />);
});

ArrowUpLeft.displayName = 'ArrowUpLeft';

export default ArrowUpLeft;

// export default () => <ArrowUpLeft />;
        