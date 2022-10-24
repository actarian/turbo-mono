
import React from 'react';
import LampWallUpSvg from '../svg/lamp-wall-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LampWallUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LampWallUpSvg {...props} ref={ref} />);
});

LampWallUp.displayName = 'LampWallUp';

export default LampWallUp;

// export default () => <LampWallUp />;
        