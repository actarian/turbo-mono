
import React from 'react';
import PercentSvg from '../svg/percent.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Percent = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PercentSvg {...props} ref={ref} />);
});

Percent.displayName = 'Percent';
