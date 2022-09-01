
import React from 'react';
import ToggleLeftSvg from '../icons/toggle-left.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToggleLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToggleLeftSvg {...props} ref={ref} />);
});

ToggleLeft.displayName = 'ToggleLeft';

export default ToggleLeft;

// export default () => <ToggleLeft />;
        