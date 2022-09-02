
import React from 'react';
import FilterSvg from '../svg/filter.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Filter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilterSvg {...props} ref={ref} />);
});

Filter.displayName = 'Filter';

export default Filter;

// export default () => <Filter />;
        