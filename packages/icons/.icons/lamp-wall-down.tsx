
import React from 'react';
import LampWallDownSvg from '../svg/lamp-wall-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LampWallDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LampWallDownSvg {...props} ref={ref} />);
});

LampWallDown.displayName = 'LampWallDown';

export default LampWallDown;

// export default () => <LampWallDown />;
        