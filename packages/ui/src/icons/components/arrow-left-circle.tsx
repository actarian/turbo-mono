
import React from 'react';
import ArrowLeftCircleSvg from '../icons/arrow-left-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowLeftCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowLeftCircleSvg {...props} ref={ref} />);
});

ArrowLeftCircle.displayName = 'ArrowLeftCircle';

export default ArrowLeftCircle;

// export default () => <ArrowLeftCircle />;
        