
import React from 'react';
import SortAscSvg from '../svg/sort-asc.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SortAsc = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SortAscSvg {...props} ref={ref} />);
});

SortAsc.displayName = 'SortAsc';

export default SortAsc;

// export default () => <SortAsc />;
        