
import React from 'react';
import BombSvg from '../svg/bomb.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bomb = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BombSvg {...props} ref={ref} />);
});

Bomb.displayName = 'Bomb';

export default Bomb;

// export default () => <Bomb />;
        