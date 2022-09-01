
import React from 'react';
import CornerRightDownSvg from '../icons/corner-right-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CornerRightDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerRightDownSvg {...props} ref={ref} />);
});

CornerRightDown.displayName = 'CornerRightDown';

export default CornerRightDown;

// export default () => <CornerRightDown />;
        