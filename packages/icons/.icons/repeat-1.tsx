
import React from 'react';
import Repeat1Svg from '../svg/repeat-1.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Repeat1 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Repeat1Svg {...props} ref={ref} />);
});

Repeat1.displayName = 'Repeat1';

export default Repeat1;

// export default () => <Repeat1 />;
        