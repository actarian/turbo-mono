
import React from 'react';
import PauseOctagonSvg from '../svg/pause-octagon.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PauseOctagon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PauseOctagonSvg {...props} ref={ref} />);
});

PauseOctagon.displayName = 'PauseOctagon';

export default PauseOctagon;

// export default () => <PauseOctagon />;
        