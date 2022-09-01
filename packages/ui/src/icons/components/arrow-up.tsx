
import React from 'react';
import ArrowUpSvg from '../icons/arrow-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpSvg {...props} ref={ref} />);
});

ArrowUp.displayName = 'ArrowUp';

export default ArrowUp;

// export default () => <ArrowUp />;
        