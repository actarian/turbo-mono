
import React from 'react';
import DrumstickSvg from '../svg/drumstick.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Drumstick = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DrumstickSvg {...props} ref={ref} />);
});

Drumstick.displayName = 'Drumstick';

export default Drumstick;

// export default () => <Drumstick />;
        