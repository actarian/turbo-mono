
import React from 'react';
import ArmchairSvg from '../svg/armchair.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Armchair = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArmchairSvg {...props} ref={ref} />);
});

Armchair.displayName = 'Armchair';

export default Armchair;

// export default () => <Armchair />;
        