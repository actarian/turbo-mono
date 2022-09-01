
import React from 'react';
import ZoomOutSvg from '../icons/zoom-out.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ZoomOut = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZoomOutSvg {...props} ref={ref} />);
});

ZoomOut.displayName = 'ZoomOut';

export default ZoomOut;

// export default () => <ZoomOut />;
        