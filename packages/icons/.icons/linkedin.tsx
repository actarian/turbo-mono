
import React from 'react';
import LinkedinSvg from '../svg/linkedin.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Linkedin = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LinkedinSvg {...props} ref={ref} />);
});

Linkedin.displayName = 'Linkedin';
