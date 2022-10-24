
import React from 'react';
import ChevronsDownUpSvg from '../svg/chevrons-down-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronsDownUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsDownUpSvg {...props} ref={ref} />);
});

ChevronsDownUp.displayName = 'ChevronsDownUp';

export default ChevronsDownUp;

// export default () => <ChevronsDownUp />;
        