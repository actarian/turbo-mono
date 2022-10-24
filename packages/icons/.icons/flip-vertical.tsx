
import React from 'react';
import FlipVerticalSvg from '../svg/flip-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlipVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlipVerticalSvg {...props} ref={ref} />);
});

FlipVertical.displayName = 'FlipVertical';

export default FlipVertical;

// export default () => <FlipVertical />;
        