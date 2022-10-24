
import React from 'react';
import ChevronLastSvg from '../svg/chevron-last.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronLast = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronLastSvg {...props} ref={ref} />);
});

ChevronLast.displayName = 'ChevronLast';

export default ChevronLast;

// export default () => <ChevronLast />;
        