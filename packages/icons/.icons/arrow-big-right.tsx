
import React from 'react';
import ArrowBigRightSvg from '../svg/arrow-big-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowBigRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowBigRightSvg {...props} ref={ref} />);
});

ArrowBigRight.displayName = 'ArrowBigRight';

export default ArrowBigRight;

// export default () => <ArrowBigRight />;
        