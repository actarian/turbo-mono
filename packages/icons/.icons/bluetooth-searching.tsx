
import React from 'react';
import BluetoothSearchingSvg from '../svg/bluetooth-searching.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BluetoothSearching = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BluetoothSearchingSvg {...props} ref={ref} />);
});

BluetoothSearching.displayName = 'BluetoothSearching';

export default BluetoothSearching;

// export default () => <BluetoothSearching />;
        