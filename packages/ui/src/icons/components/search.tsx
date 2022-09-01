
import React from 'react';
import SearchSvg from '../icons/search.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Search = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SearchSvg {...props} ref={ref} />);
});

Search.displayName = 'Search';

export default Search;

// export default () => <Search />;
        