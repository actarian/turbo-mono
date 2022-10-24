
import React from 'react';
import CloudCogSvg from '../svg/cloud-cog.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudCog = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudCogSvg {...props} ref={ref} />);
});

CloudCog.displayName = 'CloudCog';

export default CloudCog;

// export default () => <CloudCog />;
        