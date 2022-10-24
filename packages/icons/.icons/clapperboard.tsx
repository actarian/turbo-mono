
import React from 'react';
import ClapperboardSvg from '../svg/clapperboard.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clapperboard = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClapperboardSvg {...props} ref={ref} />);
});

Clapperboard.displayName = 'Clapperboard';

export default Clapperboard;

// export default () => <Clapperboard />;
        