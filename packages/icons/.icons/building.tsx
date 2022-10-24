
import React from 'react';
import BuildingSvg from '../svg/building.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Building = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BuildingSvg {...props} ref={ref} />);
});

Building.displayName = 'Building';

export default Building;

// export default () => <Building />;
        