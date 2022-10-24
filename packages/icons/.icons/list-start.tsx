
import React from 'react';
import ListStartSvg from '../svg/list-start.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListStart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListStartSvg {...props} ref={ref} />);
});

ListStart.displayName = 'ListStart';

export default ListStart;

// export default () => <ListStart />;
        