
import React from 'react';
import ScanFaceSvg from '../svg/scan-face.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScanFace = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScanFaceSvg {...props} ref={ref} />);
});

ScanFace.displayName = 'ScanFace';

export default ScanFace;

// export default () => <ScanFace />;
        