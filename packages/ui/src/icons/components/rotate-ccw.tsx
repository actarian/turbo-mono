
import React from 'react';
import RotateCcwSvg from '../icons/rotate-ccw.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RotateCcw = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RotateCcwSvg {...props} ref={ref} />);
});

RotateCcw.displayName = 'RotateCcw';

export default RotateCcw;

// export default () => <RotateCcw />;
        