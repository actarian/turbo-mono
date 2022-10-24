
import React from 'react';
import MicrowaveSvg from '../svg/microwave.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Microwave = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MicrowaveSvg {...props} ref={ref} />);
});

Microwave.displayName = 'Microwave';

export default Microwave;

// export default () => <Microwave />;
        