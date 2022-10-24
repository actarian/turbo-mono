
import React from 'react';
import ArrowBigDownSvg from '../svg/arrow-big-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowBigDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowBigDownSvg {...props} ref={ref} />);
});

ArrowBigDown.displayName = 'ArrowBigDown';

export default ArrowBigDown;

// export default () => <ArrowBigDown />;
        