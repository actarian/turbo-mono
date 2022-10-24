
import React from 'react';
import MousePointerClickSvg from '../svg/mouse-pointer-click.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MousePointerClick = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MousePointerClickSvg {...props} ref={ref} />);
});

MousePointerClick.displayName = 'MousePointerClick';

export default MousePointerClick;

// export default () => <MousePointerClick />;
        