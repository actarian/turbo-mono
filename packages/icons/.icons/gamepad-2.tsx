
import React from 'react';
import Gamepad2Svg from '../svg/gamepad-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Gamepad2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Gamepad2Svg {...props} ref={ref} />);
});

Gamepad2.displayName = 'Gamepad2';

export default Gamepad2;

// export default () => <Gamepad2 />;
        