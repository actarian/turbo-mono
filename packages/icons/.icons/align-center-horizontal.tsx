
import React from 'react';
import AlignCenterHorizontalSvg from '../svg/align-center-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignCenterHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignCenterHorizontalSvg {...props} ref={ref} />);
});

AlignCenterHorizontal.displayName = 'AlignCenterHorizontal';

export default AlignCenterHorizontal;

// export default () => <AlignCenterHorizontal />;
        