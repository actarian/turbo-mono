
import React from 'react';
import Scale3dSvg from '../svg/scale-3d.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Scale3d = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Scale3dSvg {...props} ref={ref} />);
});

Scale3d.displayName = 'Scale3d';

export default Scale3d;

// export default () => <Scale3d />;
        