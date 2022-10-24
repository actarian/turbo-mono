
import React from 'react';
import AlignStartHorizontalSvg from '../svg/align-start-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignStartHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignStartHorizontalSvg {...props} ref={ref} />);
});

AlignStartHorizontal.displayName = 'AlignStartHorizontal';

export default AlignStartHorizontal;

// export default () => <AlignStartHorizontal />;
        