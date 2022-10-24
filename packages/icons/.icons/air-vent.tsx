
import React from 'react';
import AirVentSvg from '../svg/air-vent.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AirVent = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AirVentSvg {...props} ref={ref} />);
});

AirVent.displayName = 'AirVent';

export default AirVent;

// export default () => <AirVent />;
        