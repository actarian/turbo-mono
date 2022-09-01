
import React from 'react';
import Trash2Svg from '../icons/trash-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Trash2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Trash2Svg {...props} ref={ref} />);
});

Trash2.displayName = 'Trash2';

export default Trash2;

// export default () => <Trash2 />;
        