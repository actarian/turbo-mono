
import React from 'react';
import Rotate3dSvg from '../svg/rotate-3d.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Rotate3d = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Rotate3dSvg {...props} ref={ref} />);
});

Rotate3d.displayName = 'Rotate3d';

export default Rotate3d;

// export default () => <Rotate3d />;
        