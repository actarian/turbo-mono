
import React from 'react';
import Dice6Svg from '../svg/dice-6.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dice6 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Dice6Svg {...props} ref={ref} />);
});

Dice6.displayName = 'Dice6';

export default Dice6;

// export default () => <Dice6 />;
        