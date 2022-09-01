
import React from 'react';
import OctagonSvg from '../icons/octagon.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Octagon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<OctagonSvg {...props} ref={ref} />);
});

Octagon.displayName = 'Octagon';

export default Octagon;

// export default () => <Octagon />;
        