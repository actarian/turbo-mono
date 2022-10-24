
import React from 'react';
import LocateOffSvg from '../svg/locate-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LocateOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LocateOffSvg {...props} ref={ref} />);
});

LocateOff.displayName = 'LocateOff';

export default LocateOff;

// export default () => <LocateOff />;
        