
import React from 'react';
import UnlockSvg from '../icons/unlock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Unlock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UnlockSvg {...props} ref={ref} />);
});

Unlock.displayName = 'Unlock';

export default Unlock;

// export default () => <Unlock />;
        