
import React from 'react';
import FastForwardSvg from '../icons/fast-forward.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FastForward = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FastForwardSvg {...props} ref={ref} />);
});

FastForward.displayName = 'FastForward';

export default FastForward;

// export default () => <FastForward />;
        