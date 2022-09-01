
import React from 'react';
import TriangleSvg from '../icons/triangle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Triangle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TriangleSvg {...props} ref={ref} />);
});

Triangle.displayName = 'Triangle';

export default Triangle;

// export default () => <Triangle />;
        