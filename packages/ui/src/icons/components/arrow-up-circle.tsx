
import React from 'react';
import ArrowUpCircleSvg from '../icons/arrow-up-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowUpCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpCircleSvg {...props} ref={ref} />);
});

ArrowUpCircle.displayName = 'ArrowUpCircle';

export default ArrowUpCircle;

// export default () => <ArrowUpCircle />;
        