
import React from 'react';
import XCircleSvg from '../icons/x-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const XCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XCircleSvg {...props} ref={ref} />);
});

XCircle.displayName = 'XCircle';

export default XCircle;

// export default () => <XCircle />;
        