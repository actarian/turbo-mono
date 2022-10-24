
import React from 'react';
import GamepadSvg from '../svg/gamepad.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Gamepad = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GamepadSvg {...props} ref={ref} />);
});

Gamepad.displayName = 'Gamepad';

export default Gamepad;

// export default () => <Gamepad />;
        