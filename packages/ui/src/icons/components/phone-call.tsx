
import React from 'react';
import PhoneCallSvg from '../icons/phone-call.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PhoneCall = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneCallSvg {...props} ref={ref} />);
});

PhoneCall.displayName = 'PhoneCall';

export default PhoneCall;

// export default () => <PhoneCall />;
        