
import React from 'react';
import ThermometerSnowflakeSvg from '../svg/thermometer-snowflake.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThermometerSnowflake = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThermometerSnowflakeSvg {...props} ref={ref} />);
});

ThermometerSnowflake.displayName = 'ThermometerSnowflake';

export default ThermometerSnowflake;

// export default () => <ThermometerSnowflake />;
        