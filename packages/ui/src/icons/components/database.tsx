
import React from 'react';
import DatabaseSvg from '../icons/database.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Database = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DatabaseSvg {...props} ref={ref} />);
});

Database.displayName = 'Database';

export default Database;

// export default () => <Database />;
        