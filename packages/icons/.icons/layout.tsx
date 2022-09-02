
import React from 'react';
import LayoutSvg from '../svg/layout.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LayoutSvg {...props} ref={ref} />);
});

Layout.displayName = 'Layout';

export default Layout;

// export default () => <Layout />;
        