
import React from 'react';
import StarHalfSvg from '../svg/star-half.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarHalf = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StarHalfSvg {...props} ref={ref} />);
});

StarHalf.displayName = 'StarHalf';

export default StarHalf;

// export default () => <StarHalf />;
        