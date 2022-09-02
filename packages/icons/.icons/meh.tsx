
import React from 'react';
import MehSvg from '../svg/meh.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Meh = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MehSvg {...props} ref={ref} />);
});

Meh.displayName = 'Meh';

export default Meh;

// export default () => <Meh />;
        