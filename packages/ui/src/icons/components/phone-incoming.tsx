
import React from 'react';
import PhoneIncomingSvg from '../icons/phone-incoming.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PhoneIncoming = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneIncomingSvg {...props} ref={ref} />);
});

PhoneIncoming.displayName = 'PhoneIncoming';

export default PhoneIncoming;

// export default () => <PhoneIncoming />;
        