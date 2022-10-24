
import React from 'react';
import PlaneSvg from '../svg/plane.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Plane = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlaneSvg {...props} ref={ref} />);
});

Plane.displayName = 'Plane';

export default Plane;

// export default () => <Plane />;
        