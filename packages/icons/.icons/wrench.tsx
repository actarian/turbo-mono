
import React from 'react';
import WrenchSvg from '../svg/wrench.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wrench = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WrenchSvg {...props} ref={ref} />);
});

Wrench.displayName = 'Wrench';

export default Wrench;

// export default () => <Wrench />;
        