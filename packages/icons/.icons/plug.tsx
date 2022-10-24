
import React from 'react';
import PlugSvg from '../svg/plug.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Plug = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlugSvg {...props} ref={ref} />);
});

Plug.displayName = 'Plug';

export default Plug;

// export default () => <Plug />;
        