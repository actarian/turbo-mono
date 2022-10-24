
import React from 'react';
import PackageOpenSvg from '../svg/package-open.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageOpen = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PackageOpenSvg {...props} ref={ref} />);
});

PackageOpen.displayName = 'PackageOpen';

export default PackageOpen;

// export default () => <PackageOpen />;
        