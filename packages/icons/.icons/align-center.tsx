
import React from 'react';
import AlignCenterSvg from '../svg/align-center.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignCenter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignCenterSvg {...props} ref={ref} />);
});

AlignCenter.displayName = 'AlignCenter';

export default AlignCenter;

// export default () => <AlignCenter />;
        