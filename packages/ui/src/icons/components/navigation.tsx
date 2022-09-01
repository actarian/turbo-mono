
import React from 'react';
import NavigationSvg from '../icons/navigation.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navigation = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<NavigationSvg {...props} ref={ref} />);
});

Navigation.displayName = 'Navigation';

export default Navigation;

// export default () => <Navigation />;
        