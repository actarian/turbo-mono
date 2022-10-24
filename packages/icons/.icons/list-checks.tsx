
import React from 'react';
import ListChecksSvg from '../svg/list-checks.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListChecks = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListChecksSvg {...props} ref={ref} />);
});

ListChecks.displayName = 'ListChecks';

export default ListChecks;

// export default () => <ListChecks />;
        