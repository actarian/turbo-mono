
import React from 'react';
import BaselineSvg from '../svg/baseline.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Baseline = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BaselineSvg {...props} ref={ref} />);
});

Baseline.displayName = 'Baseline';

export default Baseline;

// export default () => <Baseline />;
        