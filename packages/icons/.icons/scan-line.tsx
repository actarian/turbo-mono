
import React from 'react';
import ScanLineSvg from '../svg/scan-line.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScanLine = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScanLineSvg {...props} ref={ref} />);
});

ScanLine.displayName = 'ScanLine';

export default ScanLine;

// export default () => <ScanLine />;
        