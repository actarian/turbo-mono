
import React from 'react';
import ArrowLeftSvg from '../icons/arrow-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowLeftSvg {...props} ref={ref} />);
});

ArrowLeft.displayName = 'ArrowLeft';

export default ArrowLeft;

// export default () => <ArrowLeft />;
        