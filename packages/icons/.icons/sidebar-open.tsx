
import React from 'react';
import SidebarOpenSvg from '../svg/sidebar-open.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarOpen = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SidebarOpenSvg {...props} ref={ref} />);
});

SidebarOpen.displayName = 'SidebarOpen';

export default SidebarOpen;

// export default () => <SidebarOpen />;
        