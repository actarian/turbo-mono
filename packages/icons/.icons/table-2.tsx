
import React from 'react';
import Table2Svg from '../svg/table-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Table2Svg {...props} ref={ref} />);
});

Table2.displayName = 'Table2';

export default Table2;

// export default () => <Table2 />;
        