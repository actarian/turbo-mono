
import React from 'react';
import Axis3dSvg from '../svg/axis-3d.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Axis3d = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Axis3dSvg {...props} ref={ref} />);
});

Axis3d.displayName = 'Axis3d';

export default Axis3d;

// export default () => <Axis3d />;
        