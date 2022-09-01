
import React from 'react';
import CheckSvg from '../icons/check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Check = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckSvg {...props} ref={ref} />);
});

Check.displayName = 'Check';

export default Check;

// export default () => <Check />;
        