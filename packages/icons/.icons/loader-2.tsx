
import React from 'react';
import Loader2Svg from '../svg/loader-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loader2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Loader2Svg {...props} ref={ref} />);
});

Loader2.displayName = 'Loader2';

export default Loader2;

// export default () => <Loader2 />;
        