
import React from 'react';
import PhoneOffSvg from '../icons/phone-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PhoneOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneOffSvg {...props} ref={ref} />);
});

PhoneOff.displayName = 'PhoneOff';

export default PhoneOff;

// export default () => <PhoneOff />;
        