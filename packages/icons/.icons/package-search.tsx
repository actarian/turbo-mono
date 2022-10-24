
import React from 'react';
import PackageSearchSvg from '../svg/package-search.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageSearch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PackageSearchSvg {...props} ref={ref} />);
});

PackageSearch.displayName = 'PackageSearch';

export default PackageSearch;

// export default () => <PackageSearch />;
        