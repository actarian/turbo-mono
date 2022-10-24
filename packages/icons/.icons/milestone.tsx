
import React from 'react';
import MilestoneSvg from '../svg/milestone.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Milestone = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MilestoneSvg {...props} ref={ref} />);
});

Milestone.displayName = 'Milestone';

export default Milestone;

// export default () => <Milestone />;
        