
import React from 'react';
import Dice4Svg from '../svg/dice-4.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dice4 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Dice4Svg {...props} ref={ref} />);
});

Dice4.displayName = 'Dice4';

export default Dice4;

// export default () => <Dice4 />;
        