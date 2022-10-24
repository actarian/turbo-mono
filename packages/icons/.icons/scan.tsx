
import React from 'react';
import ScanSvg from '../svg/scan.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Scan = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScanSvg {...props} ref={ref} />);
});

Scan.displayName = 'Scan';

export default Scan;

// export default () => <Scan />;
        