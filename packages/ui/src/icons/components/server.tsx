
import React from 'react';
import ServerSvg from '../icons/server.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Server = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ServerSvg {...props} ref={ref} />);
});

Server.displayName = 'Server';

export default Server;

// export default () => <Server />;
        