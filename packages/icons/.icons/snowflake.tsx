
import React from 'react';
import SnowflakeSvg from '../svg/snowflake.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Snowflake = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SnowflakeSvg {...props} ref={ref} />);
});

Snowflake.displayName = 'Snowflake';

export default Snowflake;

// export default () => <Snowflake />;
        