
import React from 'react';
import IconFilterSvg from '../icons/icon-filter.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconFilter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IconFilterSvg {...props} ref={ref} />);
});

IconFilter.displayName = 'IconFilter';

export default IconFilter;

// export default () => <IconFilter />;
        