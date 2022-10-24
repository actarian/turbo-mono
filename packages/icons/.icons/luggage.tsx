
import React from 'react';
import LuggageSvg from '../svg/luggage.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Luggage = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LuggageSvg {...props} ref={ref} />);
});

Luggage.displayName = 'Luggage';

export default Luggage;

// export default () => <Luggage />;
        