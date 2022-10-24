
import React from 'react';
import Redo2Svg from '../svg/redo-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Redo2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Redo2Svg {...props} ref={ref} />);
});

Redo2.displayName = 'Redo2';

export default Redo2;

// export default () => <Redo2 />;
        