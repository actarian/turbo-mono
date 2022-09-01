
import React from 'react';
import ChevronsUpSvg from '../icons/chevrons-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronsUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsUpSvg {...props} ref={ref} />);
});

ChevronsUp.displayName = 'ChevronsUp';

export default ChevronsUp;

// export default () => <ChevronsUp />;
        