
import React from 'react';
import Dice5Svg from '../svg/dice-5.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dice5 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Dice5Svg {...props} ref={ref} />);
});

Dice5.displayName = 'Dice5';

export default Dice5;

// export default () => <Dice5 />;
        