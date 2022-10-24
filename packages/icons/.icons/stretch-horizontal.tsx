
import React from 'react';
import StretchHorizontalSvg from '../svg/stretch-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StretchHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StretchHorizontalSvg {...props} ref={ref} />);
});

StretchHorizontal.displayName = 'StretchHorizontal';

export default StretchHorizontal;

// export default () => <StretchHorizontal />;
        