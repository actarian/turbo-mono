
import React from 'react';
import Unlink2Svg from '../svg/unlink-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Unlink2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Unlink2Svg {...props} ref={ref} />);
});

Unlink2.displayName = 'Unlink2';

export default Unlink2;

// export default () => <Unlink2 />;
        