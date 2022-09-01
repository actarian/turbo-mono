
import React from 'react';
import ArrowDownLeftSvg from '../icons/arrow-down-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowDownLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownLeftSvg {...props} ref={ref} />);
});

ArrowDownLeft.displayName = 'ArrowDownLeft';

export default ArrowDownLeft;

// export default () => <ArrowDownLeft />;
        