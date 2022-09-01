
import React from 'react';
import CornerDownLeftSvg from '../icons/corner-down-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CornerDownLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerDownLeftSvg {...props} ref={ref} />);
});

CornerDownLeft.displayName = 'CornerDownLeft';

export default CornerDownLeft;

// export default () => <CornerDownLeft />;
        