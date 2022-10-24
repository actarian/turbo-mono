
import React from 'react';
import Dice2Svg from '../svg/dice-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dice2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Dice2Svg {...props} ref={ref} />);
});

Dice2.displayName = 'Dice2';

export default Dice2;

// export default () => <Dice2 />;
        