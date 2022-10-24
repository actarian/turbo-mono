
import React from 'react';
import PowerOffSvg from '../svg/power-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PowerOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PowerOffSvg {...props} ref={ref} />);
});

PowerOff.displayName = 'PowerOff';

export default PowerOff;

// export default () => <PowerOff />;
        