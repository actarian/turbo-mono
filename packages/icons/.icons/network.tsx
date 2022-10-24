
import React from 'react';
import NetworkSvg from '../svg/network.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Network = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<NetworkSvg {...props} ref={ref} />);
});

Network.displayName = 'Network';

export default Network;

// export default () => <Network />;
        