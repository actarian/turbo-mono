
import React from 'react';
import ScalingSvg from '../svg/scaling.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Scaling = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScalingSvg {...props} ref={ref} />);
});

Scaling.displayName = 'Scaling';

export default Scaling;

// export default () => <Scaling />;
        