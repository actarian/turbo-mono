
import React from 'react';
import PackageSvg from '../icons/package.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Package = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PackageSvg {...props} ref={ref} />);
});

Package.displayName = 'Package';

export default Package;

// export default () => <Package />;
        