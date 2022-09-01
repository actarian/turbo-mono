
import React from 'react';
import ChromeSvg from '../icons/chrome.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Chrome = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChromeSvg {...props} ref={ref} />);
});

Chrome.displayName = 'Chrome';

export default Chrome;

// export default () => <Chrome />;
        