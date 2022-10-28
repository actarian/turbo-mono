
import React from 'react';
import SearchSvg from '../svg/search.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Search = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SearchSvg {...props} ref={ref} />);
});

Search.displayName = 'Search';
