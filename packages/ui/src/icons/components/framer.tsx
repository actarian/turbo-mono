
import React from 'react';
import FramerSvg from '../icons/framer.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Framer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FramerSvg {...props} ref={ref} />);
});

Framer.displayName = 'Framer';

export default Framer;

// export default () => <Framer />;
        