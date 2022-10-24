
import React from 'react';
import LampFloorSvg from '../svg/lamp-floor.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LampFloor = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LampFloorSvg {...props} ref={ref} />);
});

LampFloor.displayName = 'LampFloor';

export default LampFloor;

// export default () => <LampFloor />;
        