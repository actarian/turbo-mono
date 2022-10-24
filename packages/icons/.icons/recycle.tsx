
import React from 'react';
import RecycleSvg from '../svg/recycle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Recycle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RecycleSvg {...props} ref={ref} />);
});

Recycle.displayName = 'Recycle';

export default Recycle;

// export default () => <Recycle />;
        