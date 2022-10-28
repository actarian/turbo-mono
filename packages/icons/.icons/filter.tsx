
import React from 'react';
import FilterSvg from '../svg/filter.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Filter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilterSvg {...props} ref={ref} />);
});

Filter.displayName = 'Filter';
