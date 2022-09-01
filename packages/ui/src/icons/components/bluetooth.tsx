
import React from 'react';
import BluetoothSvg from '../icons/bluetooth.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bluetooth = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BluetoothSvg {...props} ref={ref} />);
});

Bluetooth.displayName = 'Bluetooth';

export default Bluetooth;

// export default () => <Bluetooth />;
        