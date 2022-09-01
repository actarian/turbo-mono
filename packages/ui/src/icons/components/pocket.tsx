
import React from 'react';
import PocketSvg from '../icons/pocket.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pocket = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PocketSvg {...props} ref={ref} />);
});

Pocket.displayName = 'Pocket';

export default Pocket;

// export default () => <Pocket />;
        