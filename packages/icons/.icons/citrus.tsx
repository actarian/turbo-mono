
import React from 'react';
import CitrusSvg from '../svg/citrus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Citrus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CitrusSvg {...props} ref={ref} />);
});

Citrus.displayName = 'Citrus';

export default Citrus;

// export default () => <Citrus />;
        