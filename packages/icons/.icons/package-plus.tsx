
import React from 'react';
import PackagePlusSvg from '../svg/package-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackagePlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PackagePlusSvg {...props} ref={ref} />);
});

PackagePlus.displayName = 'PackagePlus';

export default PackagePlus;

// export default () => <PackagePlus />;
        