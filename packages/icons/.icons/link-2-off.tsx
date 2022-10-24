
import React from 'react';
import Link2OffSvg from '../svg/link-2-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link2Off = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Link2OffSvg {...props} ref={ref} />);
});

Link2Off.displayName = 'Link2Off';

export default Link2Off;

// export default () => <Link2Off />;
        