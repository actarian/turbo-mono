
import React from 'react';
import ArrowDownSvg from '../icons/arrow-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownSvg {...props} ref={ref} />);
});

ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;

// export default () => <ArrowDown />;
        