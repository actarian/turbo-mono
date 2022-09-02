
import React from 'react';
import PlusSvg from '../svg/plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Plus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlusSvg {...props} ref={ref} />);
});

Plus.displayName = 'Plus';

export default Plus;

// export default () => <Plus />;
        