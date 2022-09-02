
import React from 'react';
import DeleteSvg from '../svg/delete.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Delete = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DeleteSvg {...props} ref={ref} />);
});

Delete.displayName = 'Delete';

export default Delete;

// export default () => <Delete />;
        