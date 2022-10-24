
import React from 'react';
import MousePointer2Svg from '../svg/mouse-pointer-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MousePointer2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MousePointer2Svg {...props} ref={ref} />);
});

MousePointer2.displayName = 'MousePointer2';

export default MousePointer2;

// export default () => <MousePointer2 />;
        