
import React from 'react';
import InspectSvg from '../svg/inspect.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Inspect = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<InspectSvg {...props} ref={ref} />);
});

Inspect.displayName = 'Inspect';

export default Inspect;

// export default () => <Inspect />;
        