
import React from 'react';
import LampSvg from '../svg/lamp.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Lamp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LampSvg {...props} ref={ref} />);
});

Lamp.displayName = 'Lamp';

export default Lamp;

// export default () => <Lamp />;
        