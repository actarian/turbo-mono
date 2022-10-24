
import React from 'react';
import AlignEndHorizontalSvg from '../svg/align-end-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignEndHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignEndHorizontalSvg {...props} ref={ref} />);
});

AlignEndHorizontal.displayName = 'AlignEndHorizontal';

export default AlignEndHorizontal;

// export default () => <AlignEndHorizontal />;
        