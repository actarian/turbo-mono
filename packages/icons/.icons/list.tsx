
import React from 'react';
import ListSvg from '../svg/list.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const List = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListSvg {...props} ref={ref} />);
});

List.displayName = 'List';

export default List;

// export default () => <List />;
        