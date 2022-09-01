
import React from 'react';
import AlertOctagonSvg from '../icons/alert-octagon.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlertOctagon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlertOctagonSvg {...props} ref={ref} />);
});

AlertOctagon.displayName = 'AlertOctagon';

export default AlertOctagon;

// export default () => <AlertOctagon />;
        