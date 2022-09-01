
import React from 'react';
import Edit2Svg from '../icons/edit-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Edit2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Edit2Svg {...props} ref={ref} />);
});

Edit2.displayName = 'Edit2';

export default Edit2;

// export default () => <Edit2 />;
        