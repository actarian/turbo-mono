
import React from 'react';
import GrapeSvg from '../svg/grape.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grape = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GrapeSvg {...props} ref={ref} />);
});

Grape.displayName = 'Grape';

export default Grape;

// export default () => <Grape />;
        