
import React from 'react';
import DiscSvg from '../icons/disc.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Disc = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DiscSvg {...props} ref={ref} />);
});

Disc.displayName = 'Disc';

export default Disc;

// export default () => <Disc />;
        