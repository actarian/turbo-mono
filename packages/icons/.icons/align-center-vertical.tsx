
import React from 'react';
import AlignCenterVerticalSvg from '../svg/align-center-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignCenterVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignCenterVerticalSvg {...props} ref={ref} />);
});

AlignCenterVertical.displayName = 'AlignCenterVertical';

export default AlignCenterVertical;

// export default () => <AlignCenterVertical />;
        