
import React from 'react';
import AlertCircleSvg from '../icons/alert-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlertCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlertCircleSvg {...props} ref={ref} />);
});

AlertCircle.displayName = 'AlertCircle';

export default AlertCircle;

// export default () => <AlertCircle />;
        