
import React from 'react';
import ThermometerSunSvg from '../svg/thermometer-sun.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThermometerSun = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThermometerSunSvg {...props} ref={ref} />);
});

ThermometerSun.displayName = 'ThermometerSun';

export default ThermometerSun;

// export default () => <ThermometerSun />;
        