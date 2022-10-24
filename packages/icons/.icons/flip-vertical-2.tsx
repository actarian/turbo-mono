
import React from 'react';
import FlipVertical2Svg from '../svg/flip-vertical-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlipVertical2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlipVertical2Svg {...props} ref={ref} />);
});

FlipVertical2.displayName = 'FlipVertical2';

export default FlipVertical2;

// export default () => <FlipVertical2 />;
        