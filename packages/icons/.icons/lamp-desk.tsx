
import React from 'react';
import LampDeskSvg from '../svg/lamp-desk.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LampDesk = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LampDeskSvg {...props} ref={ref} />);
});

LampDesk.displayName = 'LampDesk';

export default LampDesk;

// export default () => <LampDesk />;
        