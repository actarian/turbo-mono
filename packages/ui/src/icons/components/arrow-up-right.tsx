
import React from 'react';
import ArrowUpRightSvg from '../icons/arrow-up-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowUpRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpRightSvg {...props} ref={ref} />);
});

ArrowUpRight.displayName = 'ArrowUpRight';

export default ArrowUpRight;

// export default () => <ArrowUpRight />;
        