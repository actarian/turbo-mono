
import React from 'react';
import CloverSvg from '../svg/clover.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clover = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloverSvg {...props} ref={ref} />);
});

Clover.displayName = 'Clover';

export default Clover;

// export default () => <Clover />;
        