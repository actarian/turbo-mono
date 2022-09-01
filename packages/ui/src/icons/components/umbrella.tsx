
import React from 'react';
import UmbrellaSvg from '../icons/umbrella.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Umbrella = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UmbrellaSvg {...props} ref={ref} />);
});

Umbrella.displayName = 'Umbrella';

export default Umbrella;

// export default () => <Umbrella />;
        