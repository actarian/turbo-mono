
import React from 'react';
import CakeSvg from '../svg/cake.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cake = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CakeSvg {...props} ref={ref} />);
});

Cake.displayName = 'Cake';

export default Cake;

// export default () => <Cake />;
        