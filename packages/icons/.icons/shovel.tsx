
import React from 'react';
import ShovelSvg from '../svg/shovel.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Shovel = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShovelSvg {...props} ref={ref} />);
});

Shovel.displayName = 'Shovel';

export default Shovel;

// export default () => <Shovel />;
        