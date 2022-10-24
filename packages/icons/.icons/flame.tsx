
import React from 'react';
import FlameSvg from '../svg/flame.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Flame = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlameSvg {...props} ref={ref} />);
});

Flame.displayName = 'Flame';

export default Flame;

// export default () => <Flame />;
        