
import React from 'react';
import ListEndSvg from '../svg/list-end.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListEnd = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListEndSvg {...props} ref={ref} />);
});

ListEnd.displayName = 'ListEnd';

export default ListEnd;

// export default () => <ListEnd />;
        