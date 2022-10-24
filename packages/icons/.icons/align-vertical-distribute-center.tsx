
import React from 'react';
import AlignVerticalDistributeCenterSvg from '../svg/align-vertical-distribute-center.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignVerticalDistributeCenter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignVerticalDistributeCenterSvg {...props} ref={ref} />);
});

AlignVerticalDistributeCenter.displayName = 'AlignVerticalDistributeCenter';

export default AlignVerticalDistributeCenter;

// export default () => <AlignVerticalDistributeCenter />;
        