
import React from 'react';
import GripHorizontalSvg from '../svg/grip-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GripHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GripHorizontalSvg {...props} ref={ref} />);
});

GripHorizontal.displayName = 'GripHorizontal';

export default GripHorizontal;

// export default () => <GripHorizontal />;
        