
import React from 'react';
import LocateFixedSvg from '../svg/locate-fixed.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LocateFixed = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LocateFixedSvg {...props} ref={ref} />);
});

LocateFixed.displayName = 'LocateFixed';

export default LocateFixed;

// export default () => <LocateFixed />;
        