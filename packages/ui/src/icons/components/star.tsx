
import React from 'react';
import StarSvg from '../icons/star.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Star = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StarSvg {...props} ref={ref} />);
});

Star.displayName = 'Star';

export default Star;

// export default () => <Star />;
        