
import React from 'react';
import ExpandSvg from '../svg/expand.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Expand = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ExpandSvg {...props} ref={ref} />);
});

Expand.displayName = 'Expand';

export default Expand;

// export default () => <Expand />;
        