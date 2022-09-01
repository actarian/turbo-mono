
import React from 'react';
import CloudDrizzleSvg from '../icons/cloud-drizzle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudDrizzle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudDrizzleSvg {...props} ref={ref} />);
});

CloudDrizzle.displayName = 'CloudDrizzle';

export default CloudDrizzle;

// export default () => <CloudDrizzle />;
        