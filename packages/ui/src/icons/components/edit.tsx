
import React from 'react';
import EditSvg from '../icons/edit.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Edit = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EditSvg {...props} ref={ref} />);
});

Edit.displayName = 'Edit';

export default Edit;

// export default () => <Edit />;
        