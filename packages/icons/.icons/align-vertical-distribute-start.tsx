
import React from 'react';
import AlignVerticalDistributeStartSvg from '../svg/align-vertical-distribute-start.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignVerticalDistributeStart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignVerticalDistributeStartSvg {...props} ref={ref} />);
});

AlignVerticalDistributeStart.displayName = 'AlignVerticalDistributeStart';

export default AlignVerticalDistributeStart;

// export default () => <AlignVerticalDistributeStart />;
        