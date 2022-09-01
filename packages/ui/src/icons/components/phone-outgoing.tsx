
import React from 'react';
import PhoneOutgoingSvg from '../icons/phone-outgoing.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PhoneOutgoing = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneOutgoingSvg {...props} ref={ref} />);
});

PhoneOutgoing.displayName = 'PhoneOutgoing';

export default PhoneOutgoing;

// export default () => <PhoneOutgoing />;
        