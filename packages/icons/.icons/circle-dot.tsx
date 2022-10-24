
import React from 'react';
import CircleDotSvg from '../svg/circle-dot.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CircleDot = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CircleDotSvg {...props} ref={ref} />);
});

CircleDot.displayName = 'CircleDot';

export default CircleDot;

// export default () => <CircleDot />;
        