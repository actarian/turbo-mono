
import React from 'react';
import RectangleVerticalSvg from '../svg/rectangle-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RectangleVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RectangleVerticalSvg {...props} ref={ref} />);
});

RectangleVertical.displayName = 'RectangleVertical';

export default RectangleVertical;

// export default () => <RectangleVertical />;
        