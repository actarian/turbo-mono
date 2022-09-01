
import React from 'react';
import CornerLeftDownSvg from '../icons/corner-left-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CornerLeftDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerLeftDownSvg {...props} ref={ref} />);
});

CornerLeftDown.displayName = 'CornerLeftDown';

export default CornerLeftDown;

// export default () => <CornerLeftDown />;
        