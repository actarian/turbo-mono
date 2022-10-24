
import React from 'react';
import BinarySvg from '../svg/binary.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Binary = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BinarySvg {...props} ref={ref} />);
});

Binary.displayName = 'Binary';

export default Binary;

// export default () => <Binary />;
        