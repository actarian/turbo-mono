
import React from 'react';
import LampCeilingSvg from '../svg/lamp-ceiling.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LampCeiling = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LampCeilingSvg {...props} ref={ref} />);
});

LampCeiling.displayName = 'LampCeiling';

export default LampCeiling;

// export default () => <LampCeiling />;
        