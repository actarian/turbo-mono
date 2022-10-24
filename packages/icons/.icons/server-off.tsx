
import React from 'react';
import ServerOffSvg from '../svg/server-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServerOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ServerOffSvg {...props} ref={ref} />);
});

ServerOff.displayName = 'ServerOff';

export default ServerOff;

// export default () => <ServerOff />;
        