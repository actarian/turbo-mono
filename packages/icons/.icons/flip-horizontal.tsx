
import React from 'react';
import FlipHorizontalSvg from '../svg/flip-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlipHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlipHorizontalSvg {...props} ref={ref} />);
});

FlipHorizontal.displayName = 'FlipHorizontal';

export default FlipHorizontal;

// export default () => <FlipHorizontal />;
        