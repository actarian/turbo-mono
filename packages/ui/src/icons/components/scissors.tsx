
import React from 'react';
import ScissorsSvg from '../icons/scissors.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Scissors = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScissorsSvg {...props} ref={ref} />);
});

Scissors.displayName = 'Scissors';

export default Scissors;

// export default () => <Scissors />;
        