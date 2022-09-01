
import React from 'react';
import MoreHorizontalSvg from '../icons/more-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MoreHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoreHorizontalSvg {...props} ref={ref} />);
});

MoreHorizontal.displayName = 'MoreHorizontal';

export default MoreHorizontal;

// export default () => <MoreHorizontal />;
        