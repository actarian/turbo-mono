
import React from 'react';
import AirplaySvg from '../icons/airplay.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Airplay = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AirplaySvg {...props} ref={ref} />);
});

Airplay.displayName = 'Airplay';

export default Airplay;

// export default () => <Airplay />;
        