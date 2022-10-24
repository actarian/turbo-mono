
import React from 'react';
import Move3dSvg from '../svg/move-3d.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Move3d = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Move3dSvg {...props} ref={ref} />);
});

Move3d.displayName = 'Move3d';

export default Move3d;

// export default () => <Move3d />;
        