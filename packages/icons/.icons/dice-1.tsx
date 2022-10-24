
import React from 'react';
import Dice1Svg from '../svg/dice-1.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dice1 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Dice1Svg {...props} ref={ref} />);
});

Dice1.displayName = 'Dice1';

export default Dice1;

// export default () => <Dice1 />;
        