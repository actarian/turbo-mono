
import React from 'react';
import RectangleHorizontalSvg from '../svg/rectangle-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RectangleHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RectangleHorizontalSvg {...props} ref={ref} />);
});

RectangleHorizontal.displayName = 'RectangleHorizontal';

export default RectangleHorizontal;

// export default () => <RectangleHorizontal />;
        