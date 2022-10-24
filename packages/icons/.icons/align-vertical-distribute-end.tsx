
import React from 'react';
import AlignVerticalDistributeEndSvg from '../svg/align-vertical-distribute-end.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignVerticalDistributeEnd = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignVerticalDistributeEndSvg {...props} ref={ref} />);
});

AlignVerticalDistributeEnd.displayName = 'AlignVerticalDistributeEnd';

export default AlignVerticalDistributeEnd;

// export default () => <AlignVerticalDistributeEnd />;
        