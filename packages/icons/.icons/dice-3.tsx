
import React from 'react';
import Dice3Svg from '../svg/dice-3.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dice3 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Dice3Svg {...props} ref={ref} />);
});

Dice3.displayName = 'Dice3';

export default Dice3;

// export default () => <Dice3 />;
        