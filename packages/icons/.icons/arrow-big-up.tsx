
import React from 'react';
import ArrowBigUpSvg from '../svg/arrow-big-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowBigUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowBigUpSvg {...props} ref={ref} />);
});

ArrowBigUp.displayName = 'ArrowBigUp';

export default ArrowBigUp;

// export default () => <ArrowBigUp />;
        