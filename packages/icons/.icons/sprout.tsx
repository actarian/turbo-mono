
import React from 'react';
import SproutSvg from '../svg/sprout.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sprout = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SproutSvg {...props} ref={ref} />);
});

Sprout.displayName = 'Sprout';

export default Sprout;

// export default () => <Sprout />;
        