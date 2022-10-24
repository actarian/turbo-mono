
import React from 'react';
import SigmaSvg from '../svg/sigma.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sigma = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SigmaSvg {...props} ref={ref} />);
});

Sigma.displayName = 'Sigma';

export default Sigma;

// export default () => <Sigma />;
        