
import React from 'react';
import ColumnsSvg from '../icons/columns.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Columns = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ColumnsSvg {...props} ref={ref} />);
});

Columns.displayName = 'Columns';

export default Columns;

// export default () => <Columns />;
        