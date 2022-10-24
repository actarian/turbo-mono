
import React from 'react';
import AlignEndVerticalSvg from '../svg/align-end-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignEndVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignEndVerticalSvg {...props} ref={ref} />);
});

AlignEndVertical.displayName = 'AlignEndVertical';

export default AlignEndVertical;

// export default () => <AlignEndVertical />;
        