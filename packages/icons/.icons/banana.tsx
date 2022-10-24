
import React from 'react';
import BananaSvg from '../svg/banana.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Banana = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BananaSvg {...props} ref={ref} />);
});

Banana.displayName = 'Banana';

export default Banana;

// export default () => <Banana />;
        