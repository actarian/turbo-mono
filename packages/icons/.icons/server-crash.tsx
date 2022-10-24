
import React from 'react';
import ServerCrashSvg from '../svg/server-crash.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServerCrash = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ServerCrashSvg {...props} ref={ref} />);
});

ServerCrash.displayName = 'ServerCrash';

export default ServerCrash;

// export default () => <ServerCrash />;
        