
import React from 'react';
import AlignHorizontalDistributeStartSvg from '../svg/align-horizontal-distribute-start.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignHorizontalDistributeStart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignHorizontalDistributeStartSvg {...props} ref={ref} />);
});

AlignHorizontalDistributeStart.displayName = 'AlignHorizontalDistributeStart';

export default AlignHorizontalDistributeStart;

// export default () => <AlignHorizontalDistributeStart />;
        