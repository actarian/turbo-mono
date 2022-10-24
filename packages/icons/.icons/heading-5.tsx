
import React from 'react';
import Heading5Svg from '../svg/heading-5.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heading5 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Heading5Svg {...props} ref={ref} />);
});

Heading5.displayName = 'Heading5';

export default Heading5;

// export default () => <Heading5 />;
        