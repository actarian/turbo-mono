
import React from 'react';
import EyeOffSvg from '../svg/eye-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EyeOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EyeOffSvg {...props} ref={ref} />);
});

EyeOff.displayName = 'EyeOff';
