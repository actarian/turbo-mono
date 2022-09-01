
import React from 'react';
import PhoneForwardedSvg from '../icons/phone-forwarded.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PhoneForwarded = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneForwardedSvg {...props} ref={ref} />);
});

PhoneForwarded.displayName = 'PhoneForwarded';

export default PhoneForwarded;

// export default () => <PhoneForwarded />;
        