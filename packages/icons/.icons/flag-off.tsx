
import React from 'react';
import FlagOffSvg from '../svg/flag-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlagOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlagOffSvg {...props} ref={ref} />);
});

FlagOff.displayName = 'FlagOff';

export default FlagOff;

// export default () => <FlagOff />;
        