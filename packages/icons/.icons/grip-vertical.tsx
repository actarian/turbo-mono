
import React from 'react';
import GripVerticalSvg from '../svg/grip-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GripVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GripVerticalSvg {...props} ref={ref} />);
});

GripVertical.displayName = 'GripVertical';

export default GripVertical;

// export default () => <GripVertical />;
        