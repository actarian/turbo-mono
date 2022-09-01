
import React from 'react';
import HeartSvg from '../icons/heart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HeartSvg {...props} ref={ref} />);
});

Heart.displayName = 'Heart';

export default Heart;

// export default () => <Heart />;
        