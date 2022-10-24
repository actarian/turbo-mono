
import React from 'react';
import ListOrderedSvg from '../svg/list-ordered.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListOrdered = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListOrderedSvg {...props} ref={ref} />);
});

ListOrdered.displayName = 'ListOrdered';

export default ListOrdered;

// export default () => <ListOrdered />;
        