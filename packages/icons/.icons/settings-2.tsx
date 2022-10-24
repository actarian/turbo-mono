
import React from 'react';
import Settings2Svg from '../svg/settings-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Settings2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Settings2Svg {...props} ref={ref} />);
});

Settings2.displayName = 'Settings2';

export default Settings2;

// export default () => <Settings2 />;
        