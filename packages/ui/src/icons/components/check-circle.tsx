
import React from 'react';
import CheckCircleSvg from '../icons/check-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CheckCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckCircleSvg {...props} ref={ref} />);
});

CheckCircle.displayName = 'CheckCircle';

export default CheckCircle;

// export default () => <CheckCircle />;
        