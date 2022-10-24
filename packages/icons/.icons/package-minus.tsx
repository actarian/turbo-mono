
import React from 'react';
import PackageMinusSvg from '../svg/package-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PackageMinusSvg {...props} ref={ref} />);
});

PackageMinus.displayName = 'PackageMinus';

export default PackageMinus;

// export default () => <PackageMinus />;
        