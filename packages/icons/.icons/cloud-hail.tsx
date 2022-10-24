
import React from 'react';
import CloudHailSvg from '../svg/cloud-hail.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudHail = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudHailSvg {...props} ref={ref} />);
});

CloudHail.displayName = 'CloudHail';

export default CloudHail;

// export default () => <CloudHail />;
        