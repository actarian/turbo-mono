
import React from 'react';
import AlignHorizontalDistributeCenterSvg from '../svg/align-horizontal-distribute-center.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignHorizontalDistributeCenter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignHorizontalDistributeCenterSvg {...props} ref={ref} />);
});

AlignHorizontalDistributeCenter.displayName = 'AlignHorizontalDistributeCenter';

export default AlignHorizontalDistributeCenter;

// export default () => <AlignHorizontalDistributeCenter />;
        