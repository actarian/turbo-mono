
import React from 'react';
import ServerCogSvg from '../svg/server-cog.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServerCog = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ServerCogSvg {...props} ref={ref} />);
});

ServerCog.displayName = 'ServerCog';

export default ServerCog;

// export default () => <ServerCog />;
        