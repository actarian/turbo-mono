
import React from 'react';
import RefreshCcwSvg from '../icons/refresh-ccw.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RefreshCcw = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RefreshCcwSvg {...props} ref={ref} />);
});

RefreshCcw.displayName = 'RefreshCcw';

export default RefreshCcw;

// export default () => <RefreshCcw />;
        