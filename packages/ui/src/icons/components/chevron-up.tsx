
import React from 'react';
import ChevronUpSvg from '../icons/chevron-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronUpSvg {...props} ref={ref} />);
});

ChevronUp.displayName = 'ChevronUp';

export default ChevronUp;

// export default () => <ChevronUp />;
        