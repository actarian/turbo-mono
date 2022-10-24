
import React from 'react';
import SidebarCloseSvg from '../svg/sidebar-close.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarClose = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SidebarCloseSvg {...props} ref={ref} />);
});

SidebarClose.displayName = 'SidebarClose';

export default SidebarClose;

// export default () => <SidebarClose />;
        