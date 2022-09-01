
import React from 'react';
import CloudOffSvg from '../icons/cloud-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudOffSvg {...props} ref={ref} />);
});

CloudOff.displayName = 'CloudOff';

export default CloudOff;

// export default () => <CloudOff />;
        