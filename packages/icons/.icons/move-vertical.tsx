
import React from 'react';
import MoveVerticalSvg from '../svg/move-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MoveVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoveVerticalSvg {...props} ref={ref} />);
});

MoveVertical.displayName = 'MoveVertical';

export default MoveVertical;

// export default () => <MoveVertical />;
        