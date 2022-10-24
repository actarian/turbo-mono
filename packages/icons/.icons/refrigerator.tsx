
import React from 'react';
import RefrigeratorSvg from '../svg/refrigerator.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Refrigerator = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RefrigeratorSvg {...props} ref={ref} />);
});

Refrigerator.displayName = 'Refrigerator';

export default Refrigerator;

// export default () => <Refrigerator />;
        