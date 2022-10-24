
import React from 'react';
import CarrotSvg from '../svg/carrot.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Carrot = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CarrotSvg {...props} ref={ref} />);
});

Carrot.displayName = 'Carrot';

export default Carrot;

// export default () => <Carrot />;
        