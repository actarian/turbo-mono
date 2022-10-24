
import React from 'react';
import BluetoothOffSvg from '../svg/bluetooth-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BluetoothOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BluetoothOffSvg {...props} ref={ref} />);
});

BluetoothOff.displayName = 'BluetoothOff';

export default BluetoothOff;

// export default () => <BluetoothOff />;
        