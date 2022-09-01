
import React from 'react';
import SkipForwardSvg from '../icons/skip-forward.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SkipForward = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SkipForwardSvg {...props} ref={ref} />);
});

SkipForward.displayName = 'SkipForward';

export default SkipForward;

// export default () => <SkipForward />;
        