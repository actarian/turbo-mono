
import React from 'react';
import SliceSvg from '../svg/slice.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slice = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SliceSvg {...props} ref={ref} />);
});

Slice.displayName = 'Slice';

export default Slice;

// export default () => <Slice />;
        