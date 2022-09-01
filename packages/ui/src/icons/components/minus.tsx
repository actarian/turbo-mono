
import React from 'react';
import MinusSvg from '../icons/minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Minus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MinusSvg {...props} ref={ref} />);
});

Minus.displayName = 'Minus';

export default Minus;

// export default () => <Minus />;
        