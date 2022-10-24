
import React from 'react';
import NavigationOffSvg from '../svg/navigation-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavigationOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<NavigationOffSvg {...props} ref={ref} />);
});

NavigationOff.displayName = 'NavigationOff';

export default NavigationOff;

// export default () => <NavigationOff />;
        