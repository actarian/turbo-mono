
import React from 'react';
import ArrowUpDownSvg from '../svg/arrow-up-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowUpDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpDownSvg {...props} ref={ref} />);
});

ArrowUpDown.displayName = 'ArrowUpDown';

export default ArrowUpDown;

// export default () => <ArrowUpDown />;
        