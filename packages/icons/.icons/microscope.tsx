
import React from 'react';
import MicroscopeSvg from '../svg/microscope.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Microscope = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MicroscopeSvg {...props} ref={ref} />);
});

Microscope.displayName = 'Microscope';

export default Microscope;

// export default () => <Microscope />;
        