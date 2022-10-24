
import React from 'react';
import CheckCircle2Svg from '../svg/check-circle-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CheckCircle2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckCircle2Svg {...props} ref={ref} />);
});

CheckCircle2.displayName = 'CheckCircle2';

export default CheckCircle2;

// export default () => <CheckCircle2 />;
        