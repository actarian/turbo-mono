
import React from 'react';
import StethoscopeSvg from '../svg/stethoscope.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stethoscope = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StethoscopeSvg {...props} ref={ref} />);
});

Stethoscope.displayName = 'Stethoscope';

export default Stethoscope;

// export default () => <Stethoscope />;
        