
import React from 'react';
import MountainSvg from '../svg/mountain.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Mountain = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MountainSvg {...props} ref={ref} />);
});

Mountain.displayName = 'Mountain';

export default Mountain;

// export default () => <Mountain />;
        