
import React from 'react';
import LassoSvg from '../svg/lasso.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Lasso = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LassoSvg {...props} ref={ref} />);
});

Lasso.displayName = 'Lasso';

export default Lasso;

// export default () => <Lasso />;
        