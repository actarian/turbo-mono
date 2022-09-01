
import React from 'react';
import PercentSvg from '../icons/percent.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Percent = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PercentSvg {...props} ref={ref} />);
});

Percent.displayName = 'Percent';

export default Percent;

// export default () => <Percent />;
        