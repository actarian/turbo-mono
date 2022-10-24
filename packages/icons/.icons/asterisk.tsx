
import React from 'react';
import AsteriskSvg from '../svg/asterisk.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Asterisk = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AsteriskSvg {...props} ref={ref} />);
});

Asterisk.displayName = 'Asterisk';

export default Asterisk;

// export default () => <Asterisk />;
        