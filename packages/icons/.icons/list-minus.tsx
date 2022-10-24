
import React from 'react';
import ListMinusSvg from '../svg/list-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListMinusSvg {...props} ref={ref} />);
});

ListMinus.displayName = 'ListMinus';

export default ListMinus;

// export default () => <ListMinus />;
        