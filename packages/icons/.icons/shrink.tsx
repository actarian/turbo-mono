
import React from 'react';
import ShrinkSvg from '../svg/shrink.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Shrink = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShrinkSvg {...props} ref={ref} />);
});

Shrink.displayName = 'Shrink';

export default Shrink;

// export default () => <Shrink />;
        