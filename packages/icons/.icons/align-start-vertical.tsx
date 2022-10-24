
import React from 'react';
import AlignStartVerticalSvg from '../svg/align-start-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignStartVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignStartVerticalSvg {...props} ref={ref} />);
});

AlignStartVertical.displayName = 'AlignStartVertical';

export default AlignStartVertical;

// export default () => <AlignStartVertical />;
        