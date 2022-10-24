
import React from 'react';
import LightbulbOffSvg from '../svg/lightbulb-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LightbulbOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LightbulbOffSvg {...props} ref={ref} />);
});

LightbulbOff.displayName = 'LightbulbOff';

export default LightbulbOff;

// export default () => <LightbulbOff />;
        