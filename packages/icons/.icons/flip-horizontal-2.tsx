
import React from 'react';
import FlipHorizontal2Svg from '../svg/flip-horizontal-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlipHorizontal2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlipHorizontal2Svg {...props} ref={ref} />);
});

FlipHorizontal2.displayName = 'FlipHorizontal2';

export default FlipHorizontal2;

// export default () => <FlipHorizontal2 />;
        