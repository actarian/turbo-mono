
import React from 'react';
import BluetoothConnectedSvg from '../svg/bluetooth-connected.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BluetoothConnected = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BluetoothConnectedSvg {...props} ref={ref} />);
});

BluetoothConnected.displayName = 'BluetoothConnected';

export default BluetoothConnected;

// export default () => <BluetoothConnected />;
        