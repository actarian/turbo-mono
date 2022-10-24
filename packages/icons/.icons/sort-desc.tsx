
import React from 'react';
import SortDescSvg from '../svg/sort-desc.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SortDesc = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SortDescSvg {...props} ref={ref} />);
});

SortDesc.displayName = 'SortDesc';

export default SortDesc;

// export default () => <SortDesc />;
        