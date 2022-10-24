
import React from 'react';
import CrownSvg from '../svg/crown.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Crown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CrownSvg {...props} ref={ref} />);
});

Crown.displayName = 'Crown';

export default Crown;

// export default () => <Crown />;
        