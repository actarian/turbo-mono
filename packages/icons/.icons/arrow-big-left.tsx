
import React from 'react';
import ArrowBigLeftSvg from '../svg/arrow-big-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowBigLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowBigLeftSvg {...props} ref={ref} />);
});

ArrowBigLeft.displayName = 'ArrowBigLeft';

export default ArrowBigLeft;

// export default () => <ArrowBigLeft />;
        