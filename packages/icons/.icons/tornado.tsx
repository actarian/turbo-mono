
import React from 'react';
import TornadoSvg from '../svg/tornado.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tornado = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TornadoSvg {...props} ref={ref} />);
});

Tornado.displayName = 'Tornado';

export default Tornado;

// export default () => <Tornado />;
        