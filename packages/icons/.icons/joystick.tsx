
import React from 'react';
import JoystickSvg from '../svg/joystick.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Joystick = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<JoystickSvg {...props} ref={ref} />);
});

Joystick.displayName = 'Joystick';

export default Joystick;

// export default () => <Joystick />;
        