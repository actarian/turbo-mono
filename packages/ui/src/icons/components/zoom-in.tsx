
import React from 'react';
import ZoomInSvg from '../icons/zoom-in.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ZoomIn = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZoomInSvg {...props} ref={ref} />);
});

ZoomIn.displayName = 'ZoomIn';

export default ZoomIn;

// export default () => <ZoomIn />;
        