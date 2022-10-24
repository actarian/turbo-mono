
import React from 'react';
import PoundSterlingSvg from '../svg/pound-sterling.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PoundSterling = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PoundSterlingSvg {...props} ref={ref} />);
});

PoundSterling.displayName = 'PoundSterling';

export default PoundSterling;

// export default () => <PoundSterling />;
        