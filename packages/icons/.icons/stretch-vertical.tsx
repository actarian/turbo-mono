
import React from 'react';
import StretchVerticalSvg from '../svg/stretch-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StretchVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StretchVerticalSvg {...props} ref={ref} />);
});

StretchVertical.displayName = 'StretchVertical';

export default StretchVertical;

// export default () => <StretchVertical />;
        