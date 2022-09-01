
import React from 'react';
import ArrowDownCircleSvg from '../icons/arrow-down-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowDownCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownCircleSvg {...props} ref={ref} />);
});

ArrowDownCircle.displayName = 'ArrowDownCircle';

export default ArrowDownCircle;

// export default () => <ArrowDownCircle />;
        