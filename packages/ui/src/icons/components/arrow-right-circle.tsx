
import React from 'react';
import ArrowRightCircleSvg from '../icons/arrow-right-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowRightCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowRightCircleSvg {...props} ref={ref} />);
});

ArrowRightCircle.displayName = 'ArrowRightCircle';

export default ArrowRightCircle;

// export default () => <ArrowRightCircle />;
        