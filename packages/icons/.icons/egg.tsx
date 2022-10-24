
import React from 'react';
import EggSvg from '../svg/egg.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Egg = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EggSvg {...props} ref={ref} />);
});

Egg.displayName = 'Egg';

export default Egg;

// export default () => <Egg />;
        