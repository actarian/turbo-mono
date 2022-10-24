
import React from 'react';
import FactorySvg from '../svg/factory.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Factory = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FactorySvg {...props} ref={ref} />);
});

Factory.displayName = 'Factory';

export default Factory;

// export default () => <Factory />;
        