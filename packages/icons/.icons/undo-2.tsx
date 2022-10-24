
import React from 'react';
import Undo2Svg from '../svg/undo-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Undo2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Undo2Svg {...props} ref={ref} />);
});

Undo2.displayName = 'Undo2';

export default Undo2;

// export default () => <Undo2 />;
        