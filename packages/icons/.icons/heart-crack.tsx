
import React from 'react';
import HeartCrackSvg from '../svg/heart-crack.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeartCrack = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HeartCrackSvg {...props} ref={ref} />);
});

HeartCrack.displayName = 'HeartCrack';

export default HeartCrack;

// export default () => <HeartCrack />;
        