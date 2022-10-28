
import React from 'react';
import PhoneSvg from '../svg/phone.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Phone = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneSvg {...props} ref={ref} />);
});

Phone.displayName = 'Phone';
