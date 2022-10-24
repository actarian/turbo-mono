
import React from 'react';
import ListXSvg from '../svg/list-x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListXSvg {...props} ref={ref} />);
});

ListX.displayName = 'ListX';

export default ListX;

// export default () => <ListX />;
        