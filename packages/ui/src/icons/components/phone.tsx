
import React from 'react';
import PhoneSvg from '../icons/phone.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Phone = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneSvg {...props} ref={ref} />);
});

Phone.displayName = 'Phone';

export default Phone;

// export default () => <Phone />;
        