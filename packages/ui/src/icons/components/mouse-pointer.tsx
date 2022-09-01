
import React from 'react';
import MousePointerSvg from '../icons/mouse-pointer.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MousePointer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MousePointerSvg {...props} ref={ref} />);
});

MousePointer.displayName = 'MousePointer';

export default MousePointer;

// export default () => <MousePointer />;
        