
import React from 'react';
import HazeSvg from '../svg/haze.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Haze = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HazeSvg {...props} ref={ref} />);
});

Haze.displayName = 'Haze';

export default Haze;

// export default () => <Haze />;
        