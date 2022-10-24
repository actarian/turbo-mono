
import React from 'react';
import LocateSvg from '../svg/locate.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Locate = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LocateSvg {...props} ref={ref} />);
});

Locate.displayName = 'Locate';

export default Locate;

// export default () => <Locate />;
        