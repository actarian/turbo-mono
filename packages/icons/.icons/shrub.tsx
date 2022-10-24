
import React from 'react';
import ShrubSvg from '../svg/shrub.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Shrub = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShrubSvg {...props} ref={ref} />);
});

Shrub.displayName = 'Shrub';

export default Shrub;

// export default () => <Shrub />;
        