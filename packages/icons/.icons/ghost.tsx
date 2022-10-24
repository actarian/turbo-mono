
import React from 'react';
import GhostSvg from '../svg/ghost.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ghost = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GhostSvg {...props} ref={ref} />);
});

Ghost.displayName = 'Ghost';

export default Ghost;

// export default () => <Ghost />;
        