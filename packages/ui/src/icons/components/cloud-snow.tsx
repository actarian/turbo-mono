
import React from 'react';
import CloudSnowSvg from '../icons/cloud-snow.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudSnow = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudSnowSvg {...props} ref={ref} />);
});

CloudSnow.displayName = 'CloudSnow';

export default CloudSnow;

// export default () => <CloudSnow />;
        