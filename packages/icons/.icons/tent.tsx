
import React from 'react';
import TentSvg from '../svg/tent.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tent = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TentSvg {...props} ref={ref} />);
});

Tent.displayName = 'Tent';

export default Tent;

// export default () => <Tent />;
        