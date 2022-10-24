
import React from 'react';
import ArrowLeftRightSvg from '../svg/arrow-left-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowLeftRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowLeftRightSvg {...props} ref={ref} />);
});

ArrowLeftRight.displayName = 'ArrowLeftRight';

export default ArrowLeftRight;

// export default () => <ArrowLeftRight />;
        