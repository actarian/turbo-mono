
import React from 'react';
import SkullSvg from '../svg/skull.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Skull = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SkullSvg {...props} ref={ref} />);
});

Skull.displayName = 'Skull';

export default Skull;

// export default () => <Skull />;
        