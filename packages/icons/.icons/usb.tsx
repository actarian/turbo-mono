
import React from 'react';
import UsbSvg from '../svg/usb.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Usb = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UsbSvg {...props} ref={ref} />);
});

Usb.displayName = 'Usb';

export default Usb;

// export default () => <Usb />;
        