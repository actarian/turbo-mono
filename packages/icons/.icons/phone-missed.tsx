
import React from 'react';
import PhoneMissedSvg from '../svg/phone-missed.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PhoneMissed = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneMissedSvg {...props} ref={ref} />);
});

PhoneMissed.displayName = 'PhoneMissed';

export default PhoneMissed;

// export default () => <PhoneMissed />;
        