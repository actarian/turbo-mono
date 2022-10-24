
import React from 'react';
import PointerSvg from '../svg/pointer.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pointer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PointerSvg {...props} ref={ref} />);
});

Pointer.displayName = 'Pointer';

export default Pointer;

// export default () => <Pointer />;
        