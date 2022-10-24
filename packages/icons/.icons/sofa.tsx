
import React from 'react';
import SofaSvg from '../svg/sofa.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sofa = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SofaSvg {...props} ref={ref} />);
});

Sofa.displayName = 'Sofa';

export default Sofa;

// export default () => <Sofa />;
        