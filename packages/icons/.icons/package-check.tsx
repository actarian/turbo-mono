
import React from 'react';
import PackageCheckSvg from '../svg/package-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PackageCheckSvg {...props} ref={ref} />);
});

PackageCheck.displayName = 'PackageCheck';

export default PackageCheck;

// export default () => <PackageCheck />;
        