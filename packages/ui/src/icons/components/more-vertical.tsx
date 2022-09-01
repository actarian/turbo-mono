
import React from 'react';
import MoreVerticalSvg from '../icons/more-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MoreVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoreVerticalSvg {...props} ref={ref} />);
});

MoreVertical.displayName = 'MoreVertical';

export default MoreVertical;

// export default () => <MoreVertical />;
        