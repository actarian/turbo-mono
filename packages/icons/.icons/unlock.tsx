
import React from 'react';
import UnlockSvg from '../svg/unlock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Unlock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UnlockSvg {...props} ref={ref} />);
});

Unlock.displayName = 'Unlock';
