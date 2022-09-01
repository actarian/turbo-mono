
import React from 'react';
import Edit3Svg from '../icons/edit-3.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Edit3 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Edit3Svg {...props} ref={ref} />);
});

Edit3.displayName = 'Edit3';

export default Edit3;

// export default () => <Edit3 />;
        