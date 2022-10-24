
import React from 'react';
import ListPlusSvg from '../svg/list-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListPlusSvg {...props} ref={ref} />);
});

ListPlus.displayName = 'ListPlus';

export default ListPlus;

// export default () => <ListPlus />;
        