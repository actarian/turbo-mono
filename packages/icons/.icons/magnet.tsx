
import React from 'react';
import MagnetSvg from '../svg/magnet.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Magnet = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MagnetSvg {...props} ref={ref} />);
});

Magnet.displayName = 'Magnet';

export default Magnet;

// export default () => <Magnet />;
        