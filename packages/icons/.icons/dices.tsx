
import React from 'react';
import DicesSvg from '../svg/dices.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dices = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DicesSvg {...props} ref={ref} />);
});

Dices.displayName = 'Dices';

export default Dices;

// export default () => <Dices />;
        