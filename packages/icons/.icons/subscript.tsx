
import React from 'react';
import SubscriptSvg from '../svg/subscript.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Subscript = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SubscriptSvg {...props} ref={ref} />);
});

Subscript.displayName = 'Subscript';

export default Subscript;

// export default () => <Subscript />;
        