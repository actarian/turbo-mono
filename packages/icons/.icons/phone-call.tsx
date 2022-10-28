
import React from 'react';
import PhoneCallSvg from '../svg/phone-call.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PhoneCall = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneCallSvg {...props} ref={ref} />);
});

PhoneCall.displayName = 'PhoneCall';
