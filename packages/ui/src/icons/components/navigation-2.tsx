
import React from 'react';
import Navigation2Svg from '../icons/navigation-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navigation2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Navigation2Svg {...props} ref={ref} />);
});

Navigation2.displayName = 'Navigation2';

export default Navigation2;

// export default () => <Navigation2 />;
        