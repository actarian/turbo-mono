
import React from 'react';
import CornerLeftUpSvg from '../icons/corner-left-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CornerLeftUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerLeftUpSvg {...props} ref={ref} />);
});

CornerLeftUp.displayName = 'CornerLeftUp';

export default CornerLeftUp;

// export default () => <CornerLeftUp />;
        