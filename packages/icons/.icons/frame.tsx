
import React from 'react';
import FrameSvg from '../svg/frame.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Frame = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FrameSvg {...props} ref={ref} />);
});

Frame.displayName = 'Frame';

export default Frame;

// export default () => <Frame />;
        