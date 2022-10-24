
import React from 'react';
import Mic2Svg from '../svg/mic-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Mic2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Mic2Svg {...props} ref={ref} />);
});

Mic2.displayName = 'Mic2';

export default Mic2;

// export default () => <Mic2 />;
        