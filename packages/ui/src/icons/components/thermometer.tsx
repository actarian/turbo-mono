
import React from 'react';
import ThermometerSvg from '../icons/thermometer.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Thermometer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThermometerSvg {...props} ref={ref} />);
});

Thermometer.displayName = 'Thermometer';

export default Thermometer;

// export default () => <Thermometer />;
        