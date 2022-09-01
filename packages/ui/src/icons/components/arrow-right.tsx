
import React from 'react';
import ArrowRightSvg from '../icons/arrow-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowRightSvg {...props} ref={ref} />);
});

ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;

// export default () => <ArrowRight />;
        