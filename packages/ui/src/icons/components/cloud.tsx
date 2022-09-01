
import React from 'react';
import CloudSvg from '../icons/cloud.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cloud = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudSvg {...props} ref={ref} />);
});

Cloud.displayName = 'Cloud';

export default Cloud;

// export default () => <Cloud />;
        