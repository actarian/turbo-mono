
import React from 'react';
import SmileSvg from '../icons/smile.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Smile = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SmileSvg {...props} ref={ref} />);
});

Smile.displayName = 'Smile';

export default Smile;

// export default () => <Smile />;
        