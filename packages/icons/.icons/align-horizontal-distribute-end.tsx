
import React from 'react';
import AlignHorizontalDistributeEndSvg from '../svg/align-horizontal-distribute-end.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignHorizontalDistributeEnd = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignHorizontalDistributeEndSvg {...props} ref={ref} />);
});

AlignHorizontalDistributeEnd.displayName = 'AlignHorizontalDistributeEnd';

export default AlignHorizontalDistributeEnd;

// export default () => <AlignHorizontalDistributeEnd />;
        