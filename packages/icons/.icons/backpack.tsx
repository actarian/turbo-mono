
import React from 'react';
import BackpackSvg from '../svg/backpack.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Backpack = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BackpackSvg {...props} ref={ref} />);
});

Backpack.displayName = 'Backpack';

export default Backpack;

// export default () => <Backpack />;
        