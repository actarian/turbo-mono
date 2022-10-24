
import React from 'react';
import CircleEllipsisSvg from '../svg/circle-ellipsis.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CircleEllipsis = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CircleEllipsisSvg {...props} ref={ref} />);
});

CircleEllipsis.displayName = 'CircleEllipsis';

export default CircleEllipsis;

// export default () => <CircleEllipsis />;
        