
import React from 'react';
import Plug2Svg from '../svg/plug-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Plug2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Plug2Svg {...props} ref={ref} />);
});

Plug2.displayName = 'Plug2';

export default Plug2;

// export default () => <Plug2 />;
        