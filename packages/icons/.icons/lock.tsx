
import React from 'react';
import LockSvg from '../svg/lock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Lock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LockSvg {...props} ref={ref} />);
});

Lock.displayName = 'Lock';
