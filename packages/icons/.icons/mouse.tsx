
import React from 'react';
import MouseSvg from '../svg/mouse.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Mouse = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MouseSvg {...props} ref={ref} />);
});

Mouse.displayName = 'Mouse';

export default Mouse;

// export default () => <Mouse />;
        