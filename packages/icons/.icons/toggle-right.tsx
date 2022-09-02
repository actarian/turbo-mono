
import React from 'react';
import ToggleRightSvg from '../svg/toggle-right.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToggleRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToggleRightSvg {...props} ref={ref} />);
});

ToggleRight.displayName = 'ToggleRight';

export default ToggleRight;

// export default () => <ToggleRight />;
        