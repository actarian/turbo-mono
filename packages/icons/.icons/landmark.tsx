
import React from 'react';
import LandmarkSvg from '../svg/landmark.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Landmark = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LandmarkSvg {...props} ref={ref} />);
});

Landmark.displayName = 'Landmark';

export default Landmark;

// export default () => <Landmark />;
        