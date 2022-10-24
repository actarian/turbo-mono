
import React from 'react';
import ShowerHeadSvg from '../svg/shower-head.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShowerHead = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShowerHeadSvg {...props} ref={ref} />);
});

ShowerHead.displayName = 'ShowerHead';

export default ShowerHead;

// export default () => <ShowerHead />;
        