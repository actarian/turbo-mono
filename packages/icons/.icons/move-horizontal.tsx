
import React from 'react';
import MoveHorizontalSvg from '../svg/move-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MoveHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoveHorizontalSvg {...props} ref={ref} />);
});

MoveHorizontal.displayName = 'MoveHorizontal';

export default MoveHorizontal;

// export default () => <MoveHorizontal />;
        