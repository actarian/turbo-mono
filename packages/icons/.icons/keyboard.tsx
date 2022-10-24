
import React from 'react';
import KeyboardSvg from '../svg/keyboard.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Keyboard = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<KeyboardSvg {...props} ref={ref} />);
});

Keyboard.displayName = 'Keyboard';

export default Keyboard;

// export default () => <Keyboard />;
        