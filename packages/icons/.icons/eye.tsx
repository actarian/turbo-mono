
import React from 'react';
import EyeSvg from '../svg/eye.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Eye = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EyeSvg {...props} ref={ref} />);
});

Eye.displayName = 'Eye';
