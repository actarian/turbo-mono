
import React from 'react';
import EqualSvg from '../svg/equal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Equal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EqualSvg {...props} ref={ref} />);
});

Equal.displayName = 'Equal';

export default Equal;

// export default () => <Equal />;
        