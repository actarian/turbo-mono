
import React from 'react';
import Package2Svg from '../svg/package-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Package2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Package2Svg {...props} ref={ref} />);
});

Package2.displayName = 'Package2';

export default Package2;

// export default () => <Package2 />;
        