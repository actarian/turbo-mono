
import React from 'react';
import ChevronFirstSvg from '../svg/chevron-first.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronFirst = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronFirstSvg {...props} ref={ref} />);
});

ChevronFirst.displayName = 'ChevronFirst';

export default ChevronFirst;

// export default () => <ChevronFirst />;
        