
import React from 'react';
import DivideSvg from '../icons/divide.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Divide = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DivideSvg {...props} ref={ref} />);
});

Divide.displayName = 'Divide';

export default Divide;

// export default () => <Divide />;
        