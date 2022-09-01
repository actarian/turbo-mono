
import React from 'react';
import AlignLeftSvg from '../icons/align-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignLeftSvg {...props} ref={ref} />);
});

AlignLeft.displayName = 'AlignLeft';

export default AlignLeft;

// export default () => <AlignLeft />;
        