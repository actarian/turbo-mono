
import React from 'react';
import PackageXSvg from '../svg/package-x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PackageXSvg {...props} ref={ref} />);
});

PackageX.displayName = 'PackageX';

export default PackageX;

// export default () => <PackageX />;
        