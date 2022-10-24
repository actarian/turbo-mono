
import React from 'react';
import SyringeSvg from '../svg/syringe.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Syringe = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SyringeSvg {...props} ref={ref} />);
});

Syringe.displayName = 'Syringe';

export default Syringe;

// export default () => <Syringe />;
        