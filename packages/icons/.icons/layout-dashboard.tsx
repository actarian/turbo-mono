
import React from 'react';
import LayoutDashboardSvg from '../svg/layout-dashboard.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LayoutDashboard = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LayoutDashboardSvg {...props} ref={ref} />);
});

LayoutDashboard.displayName = 'LayoutDashboard';

export default LayoutDashboard;

// export default () => <LayoutDashboard />;
        