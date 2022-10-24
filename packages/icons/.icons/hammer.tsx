
import React from 'react';
import HammerSvg from '../svg/hammer.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hammer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HammerSvg {...props} ref={ref} />);
});

Hammer.displayName = 'Hammer';

export default Hammer;

// export default () => <Hammer />;
        