
import React from 'react';
import MountainSnowSvg from '../svg/mountain-snow.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MountainSnow = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MountainSnowSvg {...props} ref={ref} />);
});

MountainSnow.displayName = 'MountainSnow';

export default MountainSnow;

// export default () => <MountainSnow />;
        