
import React from 'react';
import Building2Svg from '../svg/building-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Building2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Building2Svg {...props} ref={ref} />);
});

Building2.displayName = 'Building2';

export default Building2;

// export default () => <Building2 />;
        