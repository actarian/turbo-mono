
import React from 'react';
import Maximize2Svg from '../icons/maximize-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Maximize2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Maximize2Svg {...props} ref={ref} />);
});

Maximize2.displayName = 'Maximize2';

export default Maximize2;

// export default () => <Maximize2 />;
        