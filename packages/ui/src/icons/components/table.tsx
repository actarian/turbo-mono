
import React from 'react';
import TableSvg from '../icons/table.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TableSvg {...props} ref={ref} />);
});

Table.displayName = 'Table';

export default Table;

// export default () => <Table />;
        