
import React from 'react';
import UnlinkSvg from '../svg/unlink.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Unlink = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UnlinkSvg {...props} ref={ref} />);
});

Unlink.displayName = 'Unlink';

export default Unlink;

// export default () => <Unlink />;
        