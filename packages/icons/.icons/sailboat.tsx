
import React from 'react';
import SailboatSvg from '../svg/sailboat.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sailboat = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SailboatSvg {...props} ref={ref} />);
});

Sailboat.displayName = 'Sailboat';

export default Sailboat;

// export default () => <Sailboat />;
        