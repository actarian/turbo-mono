
import React from 'react';
import GrabSvg from '../svg/grab.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grab = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GrabSvg {...props} ref={ref} />);
});

Grab.displayName = 'Grab';

export default Grab;

// export default () => <Grab />;
        